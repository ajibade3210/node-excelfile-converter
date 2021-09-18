// IMPORTING PACKAGE
const mongoose = require("mongoose");

/*** MONGODB CONNECTION ***/
mongoose.connect(process.env.MONGO_URI);
//Assigning It to DB
const db = mongoose.connection;

/*** CONFIRM CONNECTION ***/
db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", function () {
  console.log("Successfully Connected To DB");
});
