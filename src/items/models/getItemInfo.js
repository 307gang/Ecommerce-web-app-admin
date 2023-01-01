const db = require("../../database/model/product");

module.exports = async (req) => {
  const { id } = req.params;
  var result = await db.getProductById(id);
  return result;
};
