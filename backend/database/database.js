let mongoose = require("mongoose");

function Database() {
  mongoose.connect("mongodb://localhost:27017/cryptopath").then((result) => {
    console.log("connected");
  });
}

module.exports = Database;
