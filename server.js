const express = require("express");
require("dotenv").config();
const { listen } = require("express/lib/application");
const slug = require("slug");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

// const ads = [
//   {
//     titel: "Bongo",
//     omschrijving:
//       "Ik zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspelIk zou graag lesgeven in de kunst van het gitaarspel",
//     naam: "Shrek",
//     locatie: "Amsterdam",
//   },
//   {
//     titel: "Elektrische bastriangel",
//     omschrijving: "Ik ben een eenzame elektrische bastriangelspeler...",
//     naam: "Jan",
//     locatie: "Utrecht",
//   },
//   {
//     titel: "Bongo",
//     omschrijving: "Ik ben een oude bongospeler en ik...",
//     naam: "Roderick van baelen",
//     locatie: "Utrecht",
//   },
// ];

const app = express();
app.use("/static", express.static("./static"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");
app.post("/", add);
app.get("/", (req, res) => {
  res.render("pages/discover");
});

app.get("/muziek", async (req, res) => {
  const query = {};
  const options = { sort: { locatie: 1 } };
  const ads = await db.collection("ads").find(query, options).toArray();
  res.render("pages/muziek", { ads });
});

app.get("/admaken", (req, res) => {
  res.render("pages/admaken");
});

async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  });
  try {
    await client.connect();
    db = await client.db(process.env.DB_NAME);
  } catch (error) {
    console.log(error);
  }
}

async function add(req, res) {
  var id = slug(req.body.titel).toLocaleLowerCase();

  let ad = {
    id: id,
    titel: req.body.titel,
    omschrijving: req.body.omschrijving,
    naam: req.body.naam,
    locatie: req.body.locatie,
  };
  //   Add Ad to database
  const result = await db.collection("ads").insertOne(ad);
  //   Load in the new list of ads
  const query = {};
  const options = { sort: { locatie: 1 } };
  const ads = await db.collection("ads").find(query, options).toArray();
  res.render("pages/muziek", { ads });
}

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connectDB().then(() => {
    console.log("connected to Mongo");
  });
});
