var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test_convo");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  papier: {
    type: Boolean,
    default: false,
  },
  eureka: {
    type: Boolean,
    default: false,
  },
  abol_tabol: {
    type: Boolean,
    default: false,
  },
  decisia: {
    type: Boolean,
    default: false,
  },
  circuistics: {
    type: Boolean,
    default: false,
  },
  inquizzitive: {
    type: Boolean,
    default: false,
  },
  spark_hack: {
    type: Boolean,
    default: false,
  },
  algomaniac: {
    type: Boolean,
    default: false,
  },
  _frames: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("users", userSchema);
