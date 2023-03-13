const express = require("express");
const router = express.Router();

const {
  httpCreateFlight,
  httpGetFlight,
  httpGetOneFlight,
  httpFlightUpdate,
} = require("../../controllers/flights-controllers");

router.post("/", httpCreateFlight);
router.get("/", httpGetFlight);
router.get("/:id", httpGetOneFlight);
router.patch("/:id", httpFlightUpdate);
module.exports = router;
