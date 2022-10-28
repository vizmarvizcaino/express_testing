import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";

export const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

Task.hasMany(User, {
  foreignKey: 'task_id',
  sourceKey: 'id'
})

User.belongsTo(Task, {
  foreignKey: 'task_id',
  targetId: 'id'
})