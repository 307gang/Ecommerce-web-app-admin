const model = require("../models/getAllBrands");

module.exports = async (req, res) => {
  if (!req.user) res.redirect("/");
  var brands = await model();
  console.log(brands);
  res.render("brands", { brands });
};
