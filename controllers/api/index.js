const router = require("express").Router();
const unitRoutes = require("./unitRoutes");
const itemRoutes = require("./itemRoutes");

router.use("/units", unitRoutes);
router.use("/items", itemRoutes);

module.exports = router;
