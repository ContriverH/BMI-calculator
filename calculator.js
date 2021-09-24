// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser"); // This is used to read the content of the body

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // here extended:true is used to post nested object. This is not used often, but are required by the body-parser to explicitly mentioned.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    res.send("Thanks for posting that!");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  console.log(req.body);
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);
  bmi = weight / Math.pow(height, 2);
  res.send("Your BMI is: " + bmi);
});

app.listen(3000, function () {
  console.log("Started server at port 3000");
});