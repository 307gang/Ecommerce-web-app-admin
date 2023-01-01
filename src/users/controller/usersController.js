const model = require("../models/getAllUser");

module.exports = async (req, res) => {
  var users = await model();
  console.log(users);
  res.render("users", { users });
};
