const db = require("../../database/model/user");

module.exports = async (id) => {
  var result = await db.getUserInfo(id);
  return result;
};
