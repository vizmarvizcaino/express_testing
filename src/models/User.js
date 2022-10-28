import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Role } from "./Role.js";

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  ocupation: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});

User.hasMany(Role, {
  foreignKey: 'user_id',
  sourceKey: 'id'
})

Role.belongsTo(User, {
  foreignKey: 'user_id',
  targetId: 'id'
})


