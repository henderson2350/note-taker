const jsonFile = require("../db/db.json");


const fs = require("fs");
const path = require("path");


module.exports = (app) => {
  app.get("/api/notes", function (req, res) {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
      if (err) throw err
      res.json(JSON.parse(data))
    })
    // res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) throw err
      data = JSON.parse(data)
      console.log(data)
      newNote.id = data.length //change this
      console.log(newNote)
      data.push(newNote)
      fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
        if (err) throw err
        res.json("Success")
    })
    //   console.log(res.body);
    } )
  });
};
