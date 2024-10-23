const express = require("express");

const app = express();

app.listen(3000);
app.set("view engine", "ejs");
app.use(express.static(__dirname));

const menuArray = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", { menu: menuArray, url: req.url });
});
app.get("/contact", (req, res) => {
  res.render("contact", { menu: menuArray, url: req.url });
});
