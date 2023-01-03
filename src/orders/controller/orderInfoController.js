const model = require("../model/getOrdersInfo");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var { id } = req.params;
  var order = await model(id);
  res.render("orderInfo", { order });
};
