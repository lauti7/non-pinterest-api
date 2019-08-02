const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./Routes/index');
const connection = require('./database');
const app = express();


connection
  .authenticate()
  .then(() => {
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use('/api', api);

    app.listen(process.env.PORT || 8080);
  })
  .catch(err => {console.error(`Unable to connect ${err}`)});

connection.sync({force: true})
          .then(() => {console.log('success')})
          .catch(err => console.error(err));
