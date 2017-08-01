const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const routes = require('./app/routes');

const port = process.env.PORT || 5000;

routes(app, {});

app.listen(port, function () {
  console.log('Example app listening on port');
});