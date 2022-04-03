// models/menu.js
const mongoose = require("mongoose");
const validator = require("validator");

const menuSchema = new mongoose.Schema({
  price: { type: String, required: true },
  text: { type: String, required: true },
  name: { type: String, required: true },
  url: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: "Invalid URL",
    },
  },
});
module.exports = mongoose.model("menu", menuSchema);
