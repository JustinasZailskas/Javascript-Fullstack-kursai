const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  seasonTitle: { type: "string", required: true },
  seasonYear: { type: Number, required: true },
  leagueID: { type: "string", required: true },
});

const season = mongoose.model("Season", seasonSchema, "season");

module.exports = season;
