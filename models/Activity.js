const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, require: true },
  src: { type: String, require: true },
  itinerary: { type: mongoose.Types.ObjectId, ref: "itinerary" },
  description: { type: String },
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
