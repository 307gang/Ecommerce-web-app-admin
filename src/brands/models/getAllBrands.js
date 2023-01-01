const db = require("../../database/model/brand");

module.exports = async () => {
  var result = await db.getAllBrand();
  return result;
};
