const mongoose = require("mongoose");

const connectDatabase = () => {
  //connecting to the database

  mongoose.connect(process.env.DB_URI).then(() => {
    console.log("server connected sucessfuly");
  });
};

module.exports = connectDatabase;
