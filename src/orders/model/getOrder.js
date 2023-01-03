const db = require("../../database/model/carts");

module.exports = async () => {
  var result = await db.getAllOrder();
  return result;
};
