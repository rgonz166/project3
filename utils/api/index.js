const router = require("express").Router();
const foodRoutes = require("./food");
const menuRoutes = require("./menu");
const vendorRoutes = require("./vendor");

// Book routes
router.use("/food", foodRoutes);
router.use("/menu", menuRoutes);
router.use("/vendor", vendorRoutes);

module.exports = router;
