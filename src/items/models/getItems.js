const db = require('../../database/model/product');

module.exports = async () => {
    var result = await db.getProductTable(); 
    return result;
}