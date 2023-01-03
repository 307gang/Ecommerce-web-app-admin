const model = require("../models/getAllUser");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var users = await model();
  console.log(users);
  res.render("users", { users });
};
