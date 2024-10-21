const express = require("express");

const app = express();

app.listen(3000);
app.set("vie engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/apie-mane", (req, res) => {
  res.redirect("about");
});
app.use((req, res) => {
  res.status(404).sendFile("./views/error404.html", { root: __dirname });
});
