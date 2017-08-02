const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

const routes = require('./app/routes');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  routes(app, database);
  app.listen(port, function () {
    console.log('Example app listening on port');
  });
})