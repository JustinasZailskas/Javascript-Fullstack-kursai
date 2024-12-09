"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const todoRouter = require("./routes/todoRoutes");
const authRouter = require("./routes/authRoutes");
const Todo = require("./models/todo");
const corsHandler = require("./middlewares/corsHandler");
const connectToDatabase = require("./services/database");
const auth = require("./middlewares/authMiddleware");
const cors = require("cors");

connectToDatabase();
app.use(cors());
app.use(express.json()); //Kodel si kodo eilute turi buti iterpta?
app.use("/", authRouter);
app.use("/todo", auth, todoRouter);

// 404 klaidos tvarkymas neapibrėžtiems maršrutams
app.use((req, res) => {
  res.status(404).json({ error: "Puslapis nerastas" });
});
const port = process.env.PORT || 3000;
// Paleiskite serverį po sėkmingo prisijungimo prie duomenų bazės
mongoose.connection.once("open", () => {
  app.listen(port, () => {
    console.log(`Serveris veikia ant ${port} porto`);
  });
});
