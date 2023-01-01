const model = require("../models/getAllBrands");

module.exports = async (req, res) => {
  var brands = await model();
  console.log(brands);
  res.render("brands", { brands });
};
