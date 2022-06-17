const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

var db;
MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, function(err, client){
  if (err) return console.log(err);

  db = client.db('portfolio');

  app.listen(process.env.PORT, function(){
    console.log('I am listening....')
  });
})

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'portfolio2022/build')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/portfolio2022/build/index.html'));
});




app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});