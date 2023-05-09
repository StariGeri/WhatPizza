const Schema = require("mongoose").Schema;

const db = require("../config/db");

const restaurants = db.model("restaurants", {
    name: String,
    address: String,
    parking: String,
    delivery: String,
    pizzas: [{
        type: Schema.Types.ObjectId,
        ref: "pizzas",
    }],
  });