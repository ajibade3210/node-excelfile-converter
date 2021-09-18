const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
require("./config/mongoose");
const indexRoute = require("./routes/index");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./assets"));

//VIEW
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRoute);
app.listen(PORT, () => console.log(`Server is Listening On ${PORT}`));
