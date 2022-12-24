const db = require("../../database/model/product");

module.exports = async (req, res) => {
    var {id} = req.params
    var product = await db.getProductById(id);
    console.log(product);
    res.render("items-info", {product});
};