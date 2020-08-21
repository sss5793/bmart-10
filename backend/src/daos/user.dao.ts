import mysql, { RowDataPacket } from "mysql2/promise";
import DAO from "./data-access-object";
import poolOption from "./pool-option";

import {
  getEncryptedPasswordAndSalt,
  getEncryptedPasswordWithSalt,
} from "../util/encryptPassword";

const CREATE_USER = `
    INSERT INTO users (email, user_name, password, salt) 
    VALUES (?, ?, ?, ?)`;

const SEARCH_USER = `
    SELECT user_name as name, salt, password 
    FROM users WHERE email = ?
`;

class UserDAO extends DAO {
  constructor(option: mysql.PoolOptions) {
    super(option);
  }

  async insertTransaction(query: string, params: Array<string>) {
    const connection = await this.getConnection();
    let result = false;

    try {
      await connection.beginTransaction();
      await this.executeQuery(connection, query, params);
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

  async createUser(
    email: string,
    userName: string,
    password: string
  ): Promise<boolean> {
    const { encryptedPassword, salt } = await getEncryptedPasswordAndSalt(
      password
    );
    const params = [email, userName, encryptedPassword, salt];
    return await this.insertTransaction(CREATE_USER, params);
  }

  async loginUser(email: string, password: string) {
    const connection = await this.getConnection();
    const rows = await connection.execute<RowDataPacket[]>(SEARCH_USER, [
      email,
    ]);
    const result = rows[0][0];
    if (!result) return false;

    const encryptedPassword = await getEncryptedPasswordWithSalt(
      password,
      result.salt
    );
    if (result.password !== encryptedPassword) return false;

    return { name: result.name };
  }
  async getUserByEmail(email: string) {}
}

export default new UserDAO(poolOption);
