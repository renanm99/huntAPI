const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const bdConfig = requireDir('').bd;
var port = process.env.PORT || 8080;

// var user = process.env['USER_MONGO'];
// var pass = process.env['PASS_MONGO'];
// var user = bdConfig.user;
// var pass = bdConfig.pass;

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://"+user+":"+pass+"@cluster0aula-93nfw.mongodb.net/StickerIO",{useNewUrlParser: true});

requireDir("./src/model");

var routes = require("./src/routes");

app.use("/", routes);

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("listening port: " + port);
    }
});
