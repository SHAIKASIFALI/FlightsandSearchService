const express = require("express");

const router = express.Router();
const cityRouter = require("./city-routes");

router.use("/city", cityRouter);
module.exports = router;
