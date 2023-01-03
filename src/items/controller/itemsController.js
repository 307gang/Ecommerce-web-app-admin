const itemModel = require("../models/getItems");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var products = await itemModel.getAllItems();
  res.render("items", { products });
};
