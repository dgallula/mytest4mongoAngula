const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./database.config');
const mongoose = require('mongoose');
const cors = require ('cors');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// create express app
const app = express();
app.use(cors())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Bank application. Take n." });
});

// listen for requests
require('./routes/user.routes')(app);
require('./routes/operation.routes')(app);



app.listen(3005, () => {
    console.log("Server is listening on port 3005");
});