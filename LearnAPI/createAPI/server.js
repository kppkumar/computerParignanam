const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Fighter = require('./models/Fighter');
mongoose.connect("mongodb://127.0.0.1:27017/freedomfighters");
app.set("port", process.env.PORT || 3000);
const bodyParser = require('body-parser');
const urlEncodeParser = bodyParser.urlencoded({extended: false});
app.use(urlEncodeParser);
app.use(bodyParser.json());

app.get('/', function(req, res) {
    Fighter.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({info: "Error: " + err});
    })
});
app.get('/:id', function(req, res) {
    Fighter.findOne({fid: parseInt(req.params.id)}).then((data) => {
        if (data === null) {
            res.json({info: "No such ID"});
        } else {
            res.json(data);
        }
    }).catch((err) => {
        res.json({info: "Error finding fighter."});
    });
});
app.use(function(req, res) {
    res.status(404);
    res.json({info: "File not found."});
});
app.use(function(err, req, res, next) {
    res.status(500);
    res.json({info: "Internal Error."});
})
app.listen(app.get("port"), function(){
    console.log(`Server started at http://localhost:${app.get("port")}. Press Ctrl + C to stop...`);
});