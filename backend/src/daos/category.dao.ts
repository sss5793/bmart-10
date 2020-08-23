import mysql, { RowDataPacket } from "mysql2/promise";
import DAO from "./data-access-object";
import poolOption from "./pool-option";

const SEARCH_SUBCATEGORY_INFO = `select no, name from sub_category where name = ?`;
const SEARCH_SUBCATEGORY_NAME_LIST = `select name, sub_category_array as data from main_category where title = ?`;

type SubCategoryNameList = {
  name: string;
  data: Array<string>;
};

type SubCategoryInfo =
  | {
      no: number;
      name: string;
    }
  | undefined;

class CategoryDAO extends DAO {
  constructor(option: mysql.PoolOptions) {
    super(option);
  }

  async getOneInfo(query: string, params: Array<string>): Promise<any> {
    const connection = await this.getConnection();
    const rows = await connection.execute<RowDataPacket[]>(query, params);
    let result = rows[0][0];

    // 그냥 반환하면 RowDataPacket[] 타입이 되기 때문에 해당 타입을 일반 배열, 객체로 변경해준다.
    if (result !== undefined) {
      result = JSON.parse(JSON.stringify(result));
    }
    return result;
  }
  async getSubCategoryNameList(
    mainTitle: string
  ): Promise<SubCategoryNameList | undefined> {
    const result = await this.getOneInfo(SEARCH_SUBCATEGORY_NAME_LIST, [
      mainTitle,
    ]);
    return result;
  }
  async getSubCategoryInfo(name: string): Promise<SubCategoryInfo> {
    const result: SubCategoryInfo = await this.getOneInfo(
      SEARCH_SUBCATEGORY_INFO,
      [name]
    );
    return result;
  }
}

export default new CategoryDAO(poolOption);
