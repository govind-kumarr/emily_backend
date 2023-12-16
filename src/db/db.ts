import { Sequelize } from "sequelize";
require("dotenv").config();

const db_url = process.env.POSTGRES_URL as string;

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../../db.sqlite",
});

/*
export const sequelize = new Sequelize(db_url, {
  dialect: "postgres",
  protocol: "postgres",
  ssl: false,
  dialectOptions: {
    ssl: false,
  },
});
*/
