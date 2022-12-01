const mongoose = require("mongoose");

const EmergencyScheema = new mongoose.Schema({
  name: {
    type: String,
  },
  medicine: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    default: "63872ff3a6245d0d2643f1c1",
  },
  address: {
    type: String,
  },
  PhoneNO: {
    type: Number,
  },
  prescription: {
    type: String,
  },
});

module.exports = new mongoose.model("emergency", EmergencyScheema);
