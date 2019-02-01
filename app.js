const express = require("express");
const bodyParser = require("body-parser");
const MongoConnector = require("./database.js");
const path = require("path");
const jsonParser = bodyParser.json();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//index route
app.get("/", (req, res) => {
  let tag = "hello";
  res.render("pages/index", {
    tag: tag
  });
});

//index route
app.get("/index", (req, res) => {
  res.render("pages/index");
});

//info route
app.get("/info", (req, res) => {
  res.render("pages/info");
});

app.listen(PORT, () => {
  console.log("the app is running ");
});
