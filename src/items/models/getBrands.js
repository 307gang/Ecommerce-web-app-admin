const db = require("../../database/model/brand");

module.exports.getAllBrand = async () => {
  var result = await db.getAllBrand();
  return result;
};

module.exports.getBrandById = async (id) => {
  var result = await db.getBrandById(id);
  return result;
};
