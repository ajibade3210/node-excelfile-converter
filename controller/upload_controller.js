/****************IMPORTING PACKAGE/MODELS*************************/
const File = require("../models/files");
const fs = require("fs");
const path = require("path");

/**********EXPORTING FUNCTION FOR Uploading ROUTE******************/
module.exports.Upload = function (req, res) {
  try {
    //Use for uploading file with note
    File.uploadedFile(req, res, function (err) {
      if (err) {
        console.log("multer Error");
      }
      console.log("filo", req.file);
      if (
        (req.file && req.file.mimetype == "application/vnd.ms-excel") ||
        (req.file && req.file.mimetype == "text/csv") ||
        (req.file && req.file.mimetype == "application/octet-stream") ||
        (req.file &&
          req.file.mimetype ==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
      ) {
        // console.log("true");
        // console.log(req.file);
        File.create(
          {
            filePath: req.file.path,
            originalName: req.file.originalname,
            file: req.file.filename,
          },
          function (err) {
            if (err) {
              console.log(err);
              return res.status(400).json({
                message: "Error in creating Note or Uploading File",
              });
            }
            // res.status(200).json({
            //     message: "File Uploaded"

            // });
            return res.redirect("/");
          }
        );
      } else {
        console.log("Please Upload CSV Format file");

        // todo add alert
        return res.redirect("/");
      }
    });
  } catch (err) {
    console.log(err);
  }
};
