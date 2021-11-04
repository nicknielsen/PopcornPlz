require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require('https');
const ejs = require("ejs");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// parse application/json
app.use(bodyParser.json())

app.set("view engine", "ejs");

const tmdbKey = process.env.TMDB_API_KEY


// Root GET handler
app.get("/", function(req, res) {
  res.render("index");
});

// Root POST handler
app.post("/", function(req, res) {
  console.log(req.body.movieName);
  const query = encodeURI(req.body.movieName);
  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&language=en-US&query=" + query + "&page=1&include_adult=false"
  var movieData = '';
  var queryTitles = []
  https.get(url, (response) => {
    console.log('statusCode:', response.statusCode);



    response.on('data', (data) => {

      movieData += data; //puts all the JSON data received from TMDb's API into a string, which will then be parsed.
    });

    response.on('end', function(){
           var parsedMovieData = JSON.parse(movieData);

           for (let i = 0; i < parsedMovieData.results.length; i++) {
             let loopTitle = parsedMovieData.results[i].original_title;
             queryTitles.push(loopTitle);
           }
           res.render("searchResults", {queryTitles: queryTitles});
       });

  }).on('error', (e) => {
    console.error(e);
  });
}); //end of root POST handler


app.listen(3000, function(req, res) {
  console.log("Server running on port 3000.")
})
