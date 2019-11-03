const express = require('express');
const config = require('./config');
const logger = require('morgan');
const {port} = require('./env');
const preventIdling = require('./prevent-idle');

const opts = {
  json: express.json,
  statics: express.static,
  urlencoded: express.urlencoded,
  logger
};

const app = express();

config(app, opts);

app.listen(port || 4150, () => {
  console.log(`Server running on port ${port}`);
  preventIdling();
});
