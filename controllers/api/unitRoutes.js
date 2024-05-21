const router = require("express").Router();
const { Unit, Item } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const unitData = await Unit.findAll({
      include: [{ model: Item, attributes: ["name", "class"] }],
    });

    res.status(200).json(unitData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
