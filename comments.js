// Create web server

var express = require('express');
var bodyParser = require('body-parser');

var comments = require('./comments-data.js');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),