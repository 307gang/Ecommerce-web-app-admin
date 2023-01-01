const tableModel = require('../models/getItems');

module.exports = async (req, res) => {
    var products = await tableModel();
    res.render("items", {products});
};