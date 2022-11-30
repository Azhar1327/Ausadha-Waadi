const mongoose = require("mongoose");

const ReqMedScheema = new mongoose.Schema({
  availability: {
    type: String,
    default: "Unavailable",
  },
  medicine: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

module.exports = new mongoose.model("ReqMed", ReqMedScheema);
