const db = require("../../database/model/product");

module.exports.getAllItems = async () => {
  var result = await db.getProductTable();
  return result;
};

module.exports.getItemInfo = async (id) => {
  var result = await db.getProductById(id);
  return result;
};
