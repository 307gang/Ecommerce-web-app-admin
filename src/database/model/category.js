const db = require("./database");

module.exports.getAllCategory = async () => {
  const { rows } = await db.query("select * from categories");
  return rows;
};

module.exports.getCategoryById = async (id) => {
  const { rows } = await db.query(
    "select * from categories where category_id = $1",
    [id]
  );
  return rows[0];
};

module.exports.getCategoryByProductId = async (id) => {
  const { rows } = await db.query(
    "select c.* from categories c, category_product cp where cp.product_id = $1 and cp.category_id = c.category_id limit 1",
    [id]
  );
  return rows[0];
};
