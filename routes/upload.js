const express = require("express");
const router = express.Router();
const uploadController = require("../controller/upload_controller");

// const multer = require("multer");
// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", FILES_PATH));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const upload = multer({
//   storage: storage,
// });

router.post("/", uploadController.Upload);
router.use("/file", require("./file"));

module.exports = router;
