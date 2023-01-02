const itemModel = require("../models/getItems");

module.exports = async (req, res) => {
  var products = await itemModel.getAllItems();
  res.render("items", { products });
};
