import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role: {
    type: DataTypes.STRING
  }
});
