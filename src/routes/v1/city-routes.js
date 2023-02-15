const {
  httpCreateCity,
  httpGetCity,
  httpUpdateCity,
  httpDeleteCity,
} = require("../../controllers/city-controllers");

const express = require("express");
const router = express.Router();

router.get("/:id", httpGetCity);
router.post("/", httpCreateCity);
router.patch("/:id", httpUpdateCity);
router.delete("/:id", httpDeleteCity);
module.exports = router;
