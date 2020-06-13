const express = require("express");
const app = express();
const fs = require("fs");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const json_file = fs.readFileSync("Products.json")
const json_file_traduit = JSON.parse(json_file);
const objet = [json_file_traduit];

function GETList() {
  let lecture = fs.readFileSync("Products.json");
  let traduit = JSON.parse(lecture);
  console.log(traduit);
}

function createData() {
  app.post("/add", function (req, res) {
  objet.push(req.body);
  res.send("POST request to the homepage");
  console.log(objet);
});
}

function modifyDATA() {}

function deleteDATA() {}

function recoverDATA() {}



app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});


createData();
console.log(objet);
