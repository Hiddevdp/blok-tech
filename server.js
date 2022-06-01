const express = require("express");
require("dotenv").config();
const { listen } = require("express/lib/application");
const slug = require("slug");
const bodyParser = require("body-parser");

const ads = [
  {
    titel: "Bongo",
    omschrijving:
      "Ik zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspel",
    naam: "Shrek",
    locatie: "Amsterdam",
  },
  {
    titel: "Elektrische bastriangel",
    omschrijving: "Ik ben een eenzame elektrische bastriangelspeler...",
    naam: "Jan",
    locatie: "Utrecht",
  },
  {
    titel: "Bongo",
    omschrijving: "Ik ben een oude bongospeler en ik...",
    naam: "Roderick van baelen",
    locatie: "Utrecht",
  },
];

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
  res.render("pages/muziek", { ads });
});

app.get("/admaken", (req, res) => {
  res.render("pages/admaken");
});

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Listening on port ${port}`));
