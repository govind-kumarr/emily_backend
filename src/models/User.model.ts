import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../db/db";

export const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});
