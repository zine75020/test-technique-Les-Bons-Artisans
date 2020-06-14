const express = require("express");
const app = express();
const fs = require("fs");
const io = require('socket.io')();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const json_file = fs.readFileSync("Products.json");
const json_file_traduit = JSON.parse(json_file);

io.on('connection', (client) => {
  // here you can start emitting events to the client 
});

const port = 8080;
io.listen(port);
console.log('listening on port ', port);

function GETList() {
  let lecture = fs.readFileSync("Products.json");
  let traduit = JSON.parse(lecture);
  app.get("/getlist", function (req,res){
    res.json(traduit);
     console.log(traduit);
  })
}

function createDATA() {
  app.post("/add", function (req, res) {
    json_file_traduit.push(req.body);
    res.send("POST request to the homepage");
    console.log(json_file_traduit);
  });
}

function modifyDATA() {
  app.post("/modify", function (req, res) {
    const valueWanted = req.body.value;
    const indexFinal = req.body.index;
    const propertyWanted = req.body.property;
    switch (propertyWanted) {
      case "_id":
        json_file_traduit[indexFinal]._id = valueWanted;
        break;
      case "name":
        json_file_traduit[indexFinal].name = valueWanted;
        break;
      case "type":
        json_file_traduit[indexFinal].type = valueWanted;
        break;
      case "rating":
        json_file_traduit[indexFinal].rating = valueWanted;
        break;
      case "warranty_years":
        json_file_traduit[indexFinal].warranty_years = valueWanted;
        break;
      case "available":
        json_file_traduit[indexFinal].available = valueWanted;
        break;
      default:
        console.log("frero euh");
    }
    res.send("POST request to the homepage");
    console.log("--------------------------", "TABLO", json_file_traduit);
  });
}

function deleteDATA() {
  app.post("/delete", function (req, res) {
    let suppr = req.body.index;
    delete json_file_traduit[suppr];
    res.send("delete confirmed");
    console.log(json_file_traduit);
  });
}

function getDATA() {
  app.post("/getdata", function (req, res) {
    const propertyWanted = req.body.property;
    const indexFinal = req.body.index;
    switch (propertyWanted) {
      case "_id":
        console.log(json_file_traduit[indexFinal]._id);
        res.send("POST request ça bien");
        break;
      case "name":
        console.log(json_file_traduit[indexFinal].name);
        res.send("POST request ça bien");
        break;
      case "type":
        console.log(json_file_traduit[indexFinal].type);
        res.send("POST request ça bien");
        break;
      case "rating":
        console.log(json_file_traduit[indexFinal].rating);
        res.send("POST request ça bien");
        break;
      case "warranty_years":
        console.log(json_file_traduit[indexFinal].warranty_years);
        res.send("POST request ça bien");
        break;
      case "available":
        console.log(json_file_traduit[indexFinal].available);
        res.send("POST request ça bien");
        break;
      default:
        console.log("frero euh");
    }
  });
}

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

createDATA();
modifyDATA();
deleteDATA();
getDATA();
GETList();
console.log(json_file_traduit);
