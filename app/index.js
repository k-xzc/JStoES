var express = require('express')
var port  = 9100
var app = express()
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
var rp = require('request-promise');
app.use(bodyParser.json());
app.use(require('express-promise')());

app.get('/version', function (req, res) {
    res.send("version : xxxxxxx")
})

app.listen(port, () => console.log(`listening on port ${port}!`))
