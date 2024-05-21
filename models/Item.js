const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    range: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    might: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    crit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;
