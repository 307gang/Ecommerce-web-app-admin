const db = require("../../database/model/user");

module.exports = async (id, banned) => {
  await db.updateUserStatus(id, banned);
};
