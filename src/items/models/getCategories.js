const db = require("../../database/model/category");

module.exports.getAllCategory = async () => {
  var result = await db.getAllCategory();
  return result;
};

module.exports.getCategoryById = async (id) => {
  var result = await db.getCategoryById(id);
  console.log(result);
  return result;
};

module.exports.getCategoryByProductId = async (id) => {
  var result = await db.getCategoryByProductId(id);
  return result;
};
