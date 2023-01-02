const itemModel = require("../models/getItems");
const brandModel = require("../models/getBrands");
const catModel = require("../models/getCategories");

module.exports = async (req, res) => {
  const { id } = req.params;
  var product = await itemModel.getItemInfo(id);
  var cur_brd = await brandModel.getBrandById(product.brand_id);
  var cur_cat = await catModel.getCategoryByProductId(product.product_id);
  console.log(cur_cat);
  var temp1 = await brandModel.getAllBrand();
  var temp2 = await catModel.getAllCategory();

  var brands = temp1.filter((brand) => brand.brand_id != cur_brd.brand_id);
  var categories = temp2.filter(
    (data) => data.category_id != cur_cat.category_id
  );

  res.render("itemInfo", { product, cur_brd, cur_cat, brands, categories });
};
