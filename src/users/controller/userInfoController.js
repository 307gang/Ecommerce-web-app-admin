const model = require("../models/getUserInfo");

module.exports = async (req, res) => {
  const { id } = req.params;
  var customer = await model(id);
  res.render("usersInfo", { customer });
};
