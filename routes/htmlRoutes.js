const path = (require("path"))

module.exports = (app) => {
// if the route is /, display the index.html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
  
  // if thte route is /notes, display the notes.html page
  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })
}


