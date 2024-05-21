const Unit = require("./Unit");
const Item = require("./Item");

Unit.hasMany(Item, {
  foreignKey: "unit_id",
  onDelete: "CASCADE",
});
Item.belongsTo(Unit, {
  foreignKey: "unit_id",
});

module.exports = { Unit, Item };
