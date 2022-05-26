const express = require("express");

const app = express();
app.use("/static", express.static("./static"));
app.use("/css", express.static("./static"));
app.use("/img", express.static("./static/img"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("pages/discover");
});

app.get("/muziek", (req, res) => {
  res.render("pages/muziek");
});

app.get("/admaken", (req, res) => {
  res.render("pages/admaken");
});

app.listen(5500);
