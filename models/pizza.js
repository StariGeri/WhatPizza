const Schema = require("mongoose").Schema;

const db = require("../config/db");

const pizzas = db.model("pizzas", {
  name: String,
  size: Number,
  price: Number,
  sauce: String,
  restId: {
    type: Schema.Types.ObjectId,
    ref: "restaurants",
  },
});
