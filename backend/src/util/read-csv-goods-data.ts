import csv from "csv-parser";
import fs from "fs";
import goodsDAO from "../daos/goods.dao";

import { Goods } from "../types/dto/goods.dto";

type Row = {
  big_category: string;
  category_name: string;
  name: string;
  cost: string;
  image_url: string;
};

fs.createReadStream("./data/output.csv")
  .pipe(csv())
  .on("data", (row: Row) => {
    const data: Goods = {
      name: row.name,
      categoryName: row.category_name,
      createdAt: new Date(),
      cost: Number(row.cost.replace(",", "")),
      discount: Math.round(Math.random() * 10) * 5,
      amount: 1000,
      isDeleted: false,
      imageUrl: row.image_url,
    };

    goodsDAO.createGoods(data);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });