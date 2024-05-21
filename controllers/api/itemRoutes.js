const router = require("express").Router();
const { Unit, Item } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
