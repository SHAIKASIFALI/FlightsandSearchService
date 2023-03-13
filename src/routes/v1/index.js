const express = require("express");

const router = express.Router();
const cityRouter = require("./city-routes");
const flightsRouter = require("./flight-routes");
const airplaneRouter = require("./airplane-routes");
router.use("/cities", cityRouter);
router.use("/flights", flightsRouter);
router.use("/airplane", airplaneRouter);

module.exports = router;
