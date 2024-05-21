const sequelize = require("../config/connection");
const { Unit, Item } = require("../models");

const unitData = require("./unitData.json");
const itemData = require("./itemData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const units = await Unit.bulkCreate(unitData, {
    individualHooks: true,
    returning: true,
  });

  for (const item of itemData) {
    await Item.create({
      ...item,
    });
  }

  process.exit(0);
};

seedDatabase();
