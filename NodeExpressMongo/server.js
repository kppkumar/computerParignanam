const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/myuserinfo");
const User = require("./schemas/User");
const handlebars = require("express-handlebars").create({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowedProtoMethods: true,
    },
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    User.find({}).then((data) => {
        res.render("home", { users: data, pageMessage: "Messages appear here." });
    });
});

app.post("/", urlEncodedParser, function (req, res) {
    // console.log(req.body.username);
    if (req.body.username) {
        User({
            name: req.body.username,
            email: req.body.email,
        }).save().catch(()=> {
            User.find({}).then((data) => {
                res.render('home', {users: data, pageMessage: `Duplicate email ID. data not saved.`});
            })
        }).then(() => {
            User.find({}).then((data) => {
                res.render("home", {
                    users: data,
                    pageMessage: `User ${req.body.username} is added.`,
                });
            });
        });
    } else if(req.body.deluseremail) {
        User.findOneAndDelete({ email: req.body.deluseremail}).then(() => {
            User.find({}).then((u) => {
                res.render('home', { users:u, pageMessage: `User with email-ID: ${req.body.deluseremail} is deleted.`})
            })
        })
    }
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});
app.use(function(err, req, res, next) {
    res.status(500);
    res.render('500');
})

app.listen(app.get("port"), function () {
    console.log(
        `Server started at http://localhost:${app.get(
            "port"
        )}. Press Ctrl+C to stop...`
    );
});
