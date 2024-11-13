"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const leagueRouter = require("./routes/leagueRoutes");
const seasonRouter = require("./routes/seasonRoutes");
const League = require("./models/league");
const corsHandler = require("./middlewares/corsHandler");
const connectToDatabase = require("./services/database");

connectToDatabase();
app.use(corsHandler);
app.use(express.json()); //Kodel si kodo eilute turi buti iterpta?
app.use("/league", leagueRouter);
app.use("/season", seasonRouter);

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
