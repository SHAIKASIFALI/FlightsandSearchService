const express = require("express");
const router = express.Router();

const {
  httpCreateAirplane,
  httpGetAirplane,
  httpGetAllAirpanes,
  httpUpdateAirplane,
  httpDeleteAirplane,
} = require("../../controllers/airplane-controllers");

router.get("/:id", httpGetAirplane);
router.get("/", httpGetAllAirpanes);
router.post("/", httpCreateAirplane);
router.patch("/:id", httpUpdateAirplane);
router.delete("/:id", httpDeleteAirplane);

module.exports = router;
