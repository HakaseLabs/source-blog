const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://codehakase:codehakase@ds163301.mlab.com:63301/hakaselabs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/todoListRoute');

routes(app);
app.use( (req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);
console.log('App running on ' + port);