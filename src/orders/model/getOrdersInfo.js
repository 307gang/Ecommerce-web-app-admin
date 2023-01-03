const product = require("../../database/model/product");
const cart = require("../../database/model/carts");

module.exports = async (id) => {
  var cartInfo = await cart.getOrderInfo(id);
  var cartItem = await cart.getOrderProduct(id);
  var products = [];
  for (const item of cartItem) {
    const nitem = await product.getProductById(item.product_id);
    products.push({
      product_id: nitem.product_id,
      product_name: nitem.product_name,
      quantity: item.product_quantity,
      price: nitem.price,
    });
  }
  cartInfo.products = products;
  return cartInfo;
};
