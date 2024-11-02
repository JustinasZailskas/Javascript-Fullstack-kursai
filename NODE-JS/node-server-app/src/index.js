"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const Todo = require("./models/todo");
const mongoose = require("mongoose");
const { title } = require("process");

const fileDirectory = __dirname + "/data";
const filePath = path.join(fileDirectory, "data.json");
const uri = "mongodb://localhost/todoApp";

app.listen(3000);
app.set("view engine", "ejs");
app.use(express.static(__dirname));
app.use(express.json());

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida prisijungiant prie duomenu bazes", error);
  }
}
run().catch(console.dir);

app.get("/todo", async (req, res) => {
  try {
    const masyvas = await Todo.find({});
    res.json(masyvas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
});

app.get("/todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const elementas = await Todo.findById(id);
    if (!elementas) {
      res.status(404).json({ message: "Toks elementas nerastas" });
    }
    res.json(elementas);
  } catch (error) {
    if (error.statusCode === 404 || error.kind === "ObjectId") {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas: " + error.toString() });
    }
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
});

app.post("/todo", async (req, res) => {
  try {
    const { title, author, status } = req.body;
    if (!title || !author || !status) {
      res
        .status(400)
        .json({ error: "Uzpildykite visus laukelius: " + error.toString() }); //4xx klaidos yra kliento klaidos
    }
    const todo = new Todo({ title, author, status });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
});

app.put("/todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { title, author, status } = req.body;

    const elementas = await Todo.findById(id);
    if (!elementas) {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas, negalima atnaujinti" });
    }

    elementas.title = title;
    elementas.author = author;
    elementas.status = status;

    await elementas.save();

    res.json({ message: "Elementas atnaujintas" });
  } catch (error) {
    if (error.statusCode === 404 || error.kind === "ObjectId") {
      res.status(404).json({ error: "Blogas identifikavimo kodas: " });
      return;
    }
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
});

app.patch("/todo/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const { title, author, status } = req.body;
    const elementas = await Todo.findById(id);
    console.log(elementas);
    if (!elementas) {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas, negalima atnaujinti" });
    }

    if (title !== undefined) {
      elementas.title = title;
    }
    if (author !== undefined) {
      elementas.author = author;
    }
    if (status !== undefined) {
      elementas.status = status;
    }
    await elementas.save();

    res.json({ message: "Elementas atnaujintas" });
  } catch (error) {
    if (error.statusCode === 404 || error.kind === "ObjectId") {
      res.status(404).json({ error: "Blogas identifikavimo kodas: " });
      return;
    }
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
});

app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const elementas = await Todo.findByIdAndDelete(id);
    console.log(elementas);

    if (!elementas) {
      res.json({ error: "Elementas nerastas" });
    }
    res.json({ message: "Elementas yra istrintas" });
  } catch (error) {
    res.status(400).json({
      error: "Elementas neistrintas, nes jis nerastas: " + error.toString(),
    });
  }
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
