const express = require("express");
require("dotenv").config();
const { listen } = require("express/lib/application");
const slug = require("slug");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const { Navigator } = require("node-navigator");
const navigator = new Navigator();
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.API_KEY,
  formatter: "json",
};

const app = express();
app.use(express.static("static"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");
app.post("/", add);

//    Paginas inladen
app.get("/", (req, res) => {
  res.render("pages/discover");
});

//    Voor deze pagina ook de advertenties inladen vanuit DB
app.get("/muziek", async (req, res) => {
  const query = {};
  const options = { sort: { locatie: 1 } };
  const ads = await db.collection("ads").find(query, options).toArray();
  res.render("pages/muziek", { ads });
});

//export ads voor mapbox
app.get("/ads", async (req, res) => {
  const ads = await db.collection("ads").find(query, options).toArray();
  res.json(ads);
});

app.get("/admaken", (req, res) => {
  const city = getlocation();
  res.render("pages/admaken", { city: city });
});

//   Connection to DB
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

// Maak een array van het formulier
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
let city;
function getlocation() {
  if (navigator.geolocation) {
    //get latitude en longitude met Geolocation API
    navigator.geolocation.getCurrentPosition(function (position) {
      //gebruik NodeGeocoder package om lat en lon om te zetten naar locatie
      const geocoder = NodeGeocoder(options);
      geocoder.reverse(
        {
          lat: position.latitude,
          lon: position.longitude,
        },
        (err, result) => {
          city = result[0].city;
        }
      );
    });
    return city;
  } else console.log("Geolocation is not supported");
}
getlocation();
console.log(city);

// 404 pagina route
app.use((req, res) => {
  res.status(404).render("pages/404");
});

// Heroku Port en anders 5500
const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
  connectDB().then(() => {
    console.log("connected to Mongo");
  });
});
