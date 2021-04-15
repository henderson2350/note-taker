const jsonFile = require("../db/db.json");
// const express = require("express");
// const app = express();
const fs = require("fs");
const path = require("path");

// displaying the db.json file in the notes api

// app.post('/api/notes', function(req, res) {
//     newNote = req.body
//     ready = newNote.json

//     fs.appendFile('db.json', ready, (err) => {
//       if (err) throw err;
//       console.log("The file was updated")
//     })
//   })

module.exports = (app) => {
  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    console.log(newNote)
    console.log()
    //   console.log(res.body);
    fs.writeFileSync("./db/db.json", json.stringify(newNote), (err) => {
      if (err) throw err
    } )
  });
};

// fetch('/api/notes', {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// .then((response) => response.json())
//     console.log(data)
//     const { noteTitle, noteText } = data

//     fs

// fs.readFile('db.json')
// app.get('/api/notes', function(req, res) {
//     const notes = fs.
// }
