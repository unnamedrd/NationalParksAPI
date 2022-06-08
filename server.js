const express = require("express");
const app = express();
const PORT = 8000;

const park = {
  'yosemite': {
    state: "California",
    peakSeason: "summer",
    lodging: "Rush Creek Lodge",
    bodyOfWater: "Yosemite falls",
    wildlife: false,
  },

  'joshua tree': {
    state: "California",
    peakSeason: "fall",
    lodging: "AirBnB",
    bodyOfWater: "none",
    wildlife: false,
  },

  "death valley": {
    state: "California",
    peakSeason: "spring",
    lodging: "Campsites",
    bodyOfWater: "none",
    wildlife: false,
  },

  'olympic': {
    state: "Washington",
    peakSeason: "summer",
    lodging: "Olympic Lodge",
    bodyOfWater: "Lake Crescent",
    wildlife: true,
  },

  "mount rainier": {
    state: "Washington",
    peakSeason: "summer",
    lodging: "Paradise Village Hotel",
    bodyOfWater: "Summit Lake",
    wildlife: true,
  },

  'unknown': {
    state: "unknown",
    peakSeason: "unknown",
    lodging: "unknown",
    bodyOfWater: "unknown",
    wildlife: false,
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
    const parkName = request.params.name.toLowerCase()
    if (park[parkName]){
        response.json(park[parkName])
    } else {
        response.json(park['unknown'])
    }
  response.json(park);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
