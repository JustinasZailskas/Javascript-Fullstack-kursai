const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  raceTitle: { type: "string", required: true },
  raceDate: { type: "string", required: true },
  city: { type: "string", required: true },
  seasonID: { type: "string", required: true },
});

const race = mongoose.model("Race", raceSchema, "race");

module.exports = race;
