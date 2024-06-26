const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 5001;

const artistListArray = [
  {
    name: "Miles Davis",
    born: 1926,
    died: 1990,
  },
  {
    name: "Duke Ellington",
    born: 1899,
    died: 1974,
  },
  {
    name: "John Coltrane",
    born: 1926,
    died: 1987,
  },
  {
    name: "Louis Daniel Armstrong",
    born: 1901,
    died: 1971,
  },
];

const songListArray = [
  {
    title: "Take Five",
    artist: "The Dave Brubeck Quartet",
  },
  {
    title: "So What",
    artist: "Miles Davis",
  },
  {
    title: "Sing Sing Sing",
    artist: "Benny Goodman",
  },
  {
    title: 'Take the "A" Train',
    artist: "The Dave Brubeck Quartet",
  },
];

app.use(express.static("server/public"));
app.use(express.json());
// ! for postman
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/artist", (req, res) => {
  res.send(artistListArray);
});

app.post("/artist", (req, res) => {
  console.log(`Get a POST request!`, req.body);

  let artist = req.body;

  console.log("Adding new artist:", artist);
  artistListArray.push(artist);

  res.sendStatus(201);
});

// TODO - Add GET for songs

app.get("/songs", (req, res) => {
  res.send(songListArray);
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
