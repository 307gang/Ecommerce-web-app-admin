const db = require("../../database/model/user");

module.exports = async () => {
  var result = await db.getAllUser();
  return result;
};
