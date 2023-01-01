const db = require("./database");

module.exports.getAllBrand = async () => {
  const { rows } = await db.query("select * from brands");
  return rows;
};

module.exports.getBrandById = async (id) => {
  const { rows } = await db.query("select * from brands where brand_id = $1", [
    id,
  ]);
  return rows[0];
};
