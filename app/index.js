var express = require('express')
var port  = 8000 
var app = express()
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var rp = require('request-promise');

var host ="http://localhost:9200"
var index ="web_site_performance"
var type ="test"
app.use(bodyParser.json());
app.use(require('express-promise')());


app.get('/home', function (req, res) {
 var json = getJson("home")
 postToEs(json).then(function(a){
   console.log(a)
   console.log(json)
 })

res.send("home page")
})

app.get('/about', function (req, res) {
  var json = getJson("about")
 postToEs(json).then(function(a){
   console.log(a)
   console.log(json)
 })

res.send("about page")
})

app.get('/contact', function (req, res) {
var json = getJson("contact")
 postToEs(json).then(function(a){
   console.log(a)
   console.log(json)
 })

res.send("contact page")
})

app.get('/main', function (req, res) {
var json = getJson("main")
 postToEs(json).then(function(a){
   console.log(a)
   console.log(json)
 })

res.send("main page")
})

function postToEs(json) {
  url = host + "/" + index + "/" + type
  return rp({
        uri: url,
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: json,
        json: true
    })
}

function getJson(page) {
  return {
    "page": page,
    "latency": getRandomInt(20, 1000),
    "timestamp": dateFormat(new Date(), "yyyy-mm-dd'T'HH:MM:ssZ")
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(port, () => console.log(`listening on port ${port}!`))
