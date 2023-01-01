const model = require("../model/brand");

module.exports.getAllBrand = async (req, res) => {
  var result = await model.getAllBrand();
  res.send({ brands: result });
};

module.exports.getBrandById = async (req, res) => {
  const { id } = req.params;
  var result = await model.getBrandById(id);
  res.send(result);
};
