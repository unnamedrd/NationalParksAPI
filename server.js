const express = require('express')
const app = express()
const PORT = 8000

const park = {
  "Yosemite": {
    state: "California",
    peakSeason: "summer",
    lodging: "Rush Creek Lodge",
    bodyOfWater: "Yosemite falls",
    wildlife: "true",
  },

  "Joshua Tree": {
    state: "California",
    peakSeason: "fall",
    lodging: "AirBnB",
    bodyOfWater: "none",
    wildlife: "false",
  },

  "Death Valley": {
    state: "California",
    peakSeason: "spring",
    lodging: "Campsites",
    bodyOfWater: "none",
    wildlife: "false",
  },

  "Olympic": {
    state: "Washington",
    peakSeason: "summer",
    lodging: "Olympic Lodge",
    bodyOfWater: "Lake Crescent",
    wildlife: "true",
  },

  "Mount Rainier": {
    state: "Washington",
    peakSeason: "summer",
    lodging: "Paradise Village Hotel",
    bodyOfWater: "Summit Lake",
    wildlife: "true",
  },
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    response.json(park)
})

app.listen(process.env.PORT ||PORT, () => {
    console.log(`The server is running on port 8000`)
})