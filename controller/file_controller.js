const fs = require("fs");
const reader = require("xlsx");
const path = require("path");
const File = require("../models/files");

/*** VIEW ***/
module.exports.View = async function (req, res) {
  console.log("view");
  console.log(req.params.file);
  let filePATH = await File.findOne({ file: req.params.file });
  console.log(filePATH);
  console.log(filePATH.filePath);

  const file = reader.readFile(filePATH.filePath);

  let results = [];
  let header = [];

  const sheets = file.SheetNames;
  try {
    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        results.push(res);
      });
    }

    let items = Object.keys(results[0]);
    items.forEach((element) => header.push(element));

    console.log("RESULLLTTT", results);
    console.log("RESULT+++", results.length);
    console.log("daaata:", header);
    res.render("file", {
      title: filePATH.originalName,
      head: header,
      data: results,
      length: results.length,
    });
  } catch (err) {
    console.log("err:", err);
  }
};
