const http = require("http");
const express = require("express")
const handlebars = require("express-handlebars").create({defaultLayout:'main'});
const bodyParser = require("body-parser");
const port = 3000;
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

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/blog", function(req, res){
    res.render("blog")
});

app.get("/resume", function(req, res){
    res.render("resume");
});

app.get("/Resume-5.pdf", function(req, res){
    res.download("Resume-5.pdf");
});

app.post("/contact-success", function(req, res) {
    console.log(req.body);
    res.render("contact-success", {data: req.body});

});

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// app.listen(1234, function() {
//     console.log("Express started on " + app.get("port"));
// });
