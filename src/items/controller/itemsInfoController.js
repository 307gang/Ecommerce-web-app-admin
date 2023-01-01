const model = require("../models/getItemInfo");

module.exports = async (req, res) => {
  var product = await model(req);
  res.render("itemInfo", { product });
};
