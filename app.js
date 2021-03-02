const express = require("express");
const bodyParser = require("body-parser");
const MongoConnector = require("./database.js");
const path = require("path");
const jsonParser = bodyParser.json();
const app = express();



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

//@des    index route
app.get("/index", (req, res) => {
  res.render("pages/index");
});

//info route
app.get("/info", (req, res) => {
  res.render("pages/info");
});

//info route
app.get("/enroll", (req, res) => {
  res.render("pages/enroll");
});

//assignment route
app.get("/assignments", (req, res) => {
  res.render("pages/assignments");
});

//lectures route
app.get("/meetings", (req, res) => {
  res.render("pages/lectures");
});

//instructions route
app.get("/instructions", (req, res) => {
  res.render("pages/instructions");
});

//instructions route
// app.get("/api/dictionary", (req, res) => {
//   res.o
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("the app is running ");
});
