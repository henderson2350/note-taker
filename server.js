//Dependencies
const express = require("express")
const path = require("path")
const fs = require("fs")

// Sets up the express app and the port
const app = express()
var PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

app.use(express.static('public'))

// if the route is /, display the index.html page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

// if thte route is /notes, display the notes.html page
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
})

// displaying the db.json file in the notes api
app.get('/api/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"))
})

// app.get('/api/characters', (req, res) => res.json(characters));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))