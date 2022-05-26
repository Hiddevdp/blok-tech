const express = require("express");
const { listen } = require("express/lib/application");

const app = express();
app.use("/static", express.static("./static"));
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

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Listening on port ${port}`));
