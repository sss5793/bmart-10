import mysql from "mysql2/promise";
import DAO from "./data-access-object";
import poolOption from "./pool-option";

import { Goods } from "../types/dto/goods.dto";

const CREATE_GOODS = `INSERT INTO goods (\`name\`, category_name, cost, discount, amount, is_deleted, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)`;

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
    isDeleted,
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
        `${isDeleted ? 1 : 0}`,
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
