import mysql from "mysql2/promise";
import DAO from "./data-access-object";
import poolOption from "./pool-option";

import { Goods } from "../types/dto/goods.dto";

const CREATE_GOODS = `INSERT INTO goods (title, category_name, cost, discount, amount, image_url) VALUES (?, ?, ?, ?, ?, ?)`;

class GoodsDAO extends DAO {
  constructor(option: mysql.PoolOptions) {
    super(option);
  }

  async createGoods({
    name,
    categoryName,
    cost,
    discount,
    amount,
    imageUrl,
  }: Goods) {
    const connection = await this.getConnection();
    let result = false;
    try {
      await connection.beginTransaction();
      await this.executeQuery(connection, CREATE_GOODS, [
        name,
        categoryName,
        `${cost}`,
        `${discount}`,
        `${amount}`,
        imageUrl,
      ]);

      result = true;
      await connection.commit();
    } catch (error) {
      console.log(error);
      connection.rollback();
    } finally {
      connection.release();
    }
    return result;
  }
}

export default new GoodsDAO(poolOption);
