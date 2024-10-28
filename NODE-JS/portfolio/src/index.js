const express = require("express");
const routers = require("./data/routers.json");
const projects = require("./data/data.json");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

const directoryPath = "/src/data";
const filePath = path.join(directoryPath, "contactData.json");

app.listen(3000);
app.set("view engine", "ejs");
// app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", { menu: routers, url: req.url, projects: projects });
});
app.get("/contact", (req, res) => {
  res.render("contact", { menu: routers, url: req.url });
});
// app.post("/contact", (req, res) => {
//   const firsname = req.body["firstname"];
//   const data = {
//     firstname: req.body["firstname"],
//     lastname: req.body["lastname"],
//     email: req.body["email"],
//     service: req.body["service"],
//     comment: req.body["subject"],
//   };
//   console.log(data);

//   fs.writeFile(filePath, JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Sėkmingai įrašiau šiuos duomenis: ");
//   });

//   res.render("contact", { menu: routers, url: req.url });
// });
