const db = require("../../database/model/product");

module.exports = async (req) => {
  const { product_image } = req.body;
  const { product_id } = req.body;
  const { product_name, brand_id, category_id } = req.body;
  const { price, description, product_stock } = req.body;
  var { hidden } = req.body;
  if (hidden == "on") hidden = true;
  else hidden = false;
  await db.addProduct(
    product_id,
    product_name,
    brand_id,
    category_id,
    price,
    description,
    product_image,
    product_stock,
    hidden
  );
};
