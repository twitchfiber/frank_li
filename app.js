const http = require("http");
const express = require("express")
const handlebars = require("express-handlebars").create({defaultLayout:'main'});
const bodyParser = require("body-parser");
const port = 8060;
var app = express();

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.listen(port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// Routing 
app.get("/", function(req, res){
    res.render("home");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/resumedownload", function(req, res){
    res.download("resume.pdf");
});

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});