const model = require("../models/getBrandInfo");

module.exports = async (req, res) => {
  var { id } = req.params;
  var brand = await model(id);
  res.render("brandInfo", { brand });
};
