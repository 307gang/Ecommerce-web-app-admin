const Ajv = require("ajv");
const format = require("ajv-formats");

const model = require("../models/saveItemInfo");
const schema = require("../models/productSchema");

const ajv = new Ajv();
format(ajv);

module.exports = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  // if (!ajv.validate(schema, req.body)) {
  //   res.redirect(`/shop-items/${id}`);
  //   return;
  // }

  try {
    await model(req);
  } catch (e) {
    if (e) console.log(e);
    res.redirect(`/shop-items/${id}`);
  }
  res.redirect(`/shop-items`);
};
