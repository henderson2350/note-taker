//Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
// const apiRoutes = require('./public/')

// Sets up the express app and the port
const app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static("public"));

// app.get('/api/characters', (req, res) => res.json(characters));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
