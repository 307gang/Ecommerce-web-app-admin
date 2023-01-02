const brandModel = require("../models/getBrands");
const catModel = require("../models/getCategories");

module.exports = async (req, res) => {
  var brands = await brandModel.getAllBrand();
  var categories = await catModel.getAllCategory();
  res.render("newItem", { brands, categories });
};
