"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const { title } = require("process");

const app = express();

const fileDirectory = __dirname + "/data";
const filePath = path.join(fileDirectory, "data.json");

app.listen(3000);
app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.use(express.json());

app.get("/todo", (req, res) => {
  let masyvas = [];
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.json({ error: "Klaida" });
      return;
    }
    masyvas = JSON.parse(data);
    res.json(masyvas);
  });
});

app.get("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const masyvas = JSON.parse(data);
    const elementas = masyvas.find((elementas) => elementas.id === id);
    if (!elementas) {
      res.json({ error: "Elementas nerastas" });
      return;
    }
    res.json(elementas);
  });
});

app.post("/todo", (req, res) => {
  const masyvas = JSON.parse(fs.readFileSync(filePath));
  const title = req.body.title;
  const author = req.body.author;
  const status = req.body.status;
  const id = masyvas.length + 1;
  masyvas.push({ title, id, author, status });
  fs.writeFileSync(filePath, JSON.stringify(masyvas), (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json("Duomenys ivesti");
  });
});

app.put("/todo/:id", (req, res) => {
  const masyvas = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  const { title, author, status } = req.body;
  const elementoID = masyvas.findIndex((elementas) => elementas.id === id);
  const atnaujintasElementas = {
    title: title,
    author: author,
    status: status,
  };
  if (elementoID !== -1) {
    masyvas[elementoID] = atnaujintasElementas;
  } else {
    res.json("Tokio elemento nera");
  }
  fs.writeFileSync(filePath, JSON.stringify(masyvas), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({ error: "Elementas atnaujintas" });
});

app.patch("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, status } = req.body;
  const elementoID = masyvas.findIndex((elementas) => elementas.id === id);

  if (elementoID === -1) {
    res.json({ error: "Elementas nerastas" });
  }
  if (title !== undefined) {
    masyvas[elementoID].title = title;
  }
  if (author !== undefined) {
    masyvas[elementoID].author = author;
  }
  if (status !== undefined) {
    masyvas[elementoID].status = status;
  }
  fs.writeFileSync(filePath, JSON.stringify(masyvas), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({ error: "Elementas dalinai atnaujintas" });
});

app.delete("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const masyvas = JSON.parse(fs.readFileSync(filePath));
  const naujasMasyvas = masyvas.filter((elementas) => elementas.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(naujasMasyvas), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Puslapis nerastas" });
});

app.get("/", (req, res) => {
  res.render("index", { duomenys: masyvas, title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About us" });
});
app.get("/apie-mane", (req, res) => {
  res.redirect("about");
});
app.get("/slapta-info", (req, res) => {
  res.redirect("about");
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
