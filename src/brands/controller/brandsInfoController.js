const model = require("../models/getBrandInfo");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var { id } = req.params;
  var brand = await model(id);
  res.render("brandInfo", { brand });
};
