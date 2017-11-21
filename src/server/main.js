const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios');
const apiRoutes = require('./api')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('/../../'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../../index.html'));
});

app.use('/api', apiRoutes)

app.listen(3000, () => console.log(`Server started. Point your bot endpoint to http://127.0.0.1:3000`))
