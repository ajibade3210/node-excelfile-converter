const express = require("express");
const router = express.Router();
const fileController = require("../controller/file_controller");

router.get("/:file", fileController.View);

module.exports = router;
