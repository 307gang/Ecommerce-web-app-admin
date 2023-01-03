const model = require("../model/getOrder");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var orders = await model();
  res.render("orders", { orders });
};
