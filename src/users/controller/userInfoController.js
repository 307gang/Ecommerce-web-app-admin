const model = require("../models/getUserInfo");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  const { id } = req.params;
  var customer = await model(id);
  res.render("usersInfo", { customer });
};
