const db = require("../model/user");

module.exports.getAllUser = async (req, res) => {
  var result = await db.getAllUser();
  res.send({ users: result });
};
