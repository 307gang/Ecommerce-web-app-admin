const db = require("../../database/model/brand");

module.exports = async (id) => {
  var result = await db.getBrandById(id);
  return result;
};
