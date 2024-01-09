const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});
const Sales = mongoose.model("Sales", dataSchema);
module.exports = Sales;
