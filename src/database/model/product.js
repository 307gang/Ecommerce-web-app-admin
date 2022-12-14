const db = require("./database");

module.exports.getAllProduct = async (req) => {
  const { range, start } = req.query;
  if (range && start) {
    var { rows } = await db.query(
      "select * from products order by product_id limit $1 offset $2",
      [range, start]
    );
    return rows;
  }
  var { rows } = await db.query("select * from products");
  return rows;
};

module.exports.getAllProductWithFilter = async (req) => {
  const { cat } = req.query;
  const { p_s, p_e } = req.query;
  const { brd } = req.query;
  const { range, start } = req.query;
  var filter_sql = "where ";
  var first_fil = false;
  if (cat) {
    filter_sql =
      filter_sql +
      `(category_product.category_id = '${cat}' and category_product.product_id = products.product_id)`;
    first_fil = true;
  }
  if (p_s && p_e) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `(products.price between ${p_s} and ${p_e})`;
    first_fil = true;
  }
  if (brd) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `products.brand_id = '${brd}'`;
  }
  if (range && start) {
    const { rows } = await db.query(
      `select distinct products.* from products, category_product ${filter_sql} order by product_id limit $1 offset $2`,
      [range, start]
    );
    return rows;
  }
  const { rows } = await db.query(
    `select distinct products.* from products, category_product ${filter_sql}`
  );
  return rows;
};

module.exports.getAllProductSorted = async (req) => {
  const { sortBy, sortOrder } = req.query;
  console.log(`select * from products order by ${sortBy} ${sortOrder}`);
  const { range, start } = req.query;
  if (range) {
    const { rows } = await db.query(
      `select * from products order by ${sortBy} ${sortOrder} limit $1 offset $2`,
      [range, start]
    );
    return rows;
  }
  const { rows } = await db.query(
    `select * from products order by ${sortBy} ${sortOrder}`
  );
  return rows;
};

module.exports.getAllProductSortedWithFilter = async (req) => {
  const { sortBy, sortOrder } = req.query;
  const { cat } = req.query;
  const { p_s, p_e } = req.query;
  const { brd } = req.query;
  const { range, start } = req.query;
  var filter_sql = "where ";
  var first_fil = false;
  if (cat) {
    filter_sql =
      filter_sql +
      `(category_product.category_id = '${cat}' and category_product.product_id = products.product_id)`;
    first_fil = true;
  }
  if (p_s && p_e) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `(products.price between ${p_s} and ${p_e})`;
    first_fil = true;
  }
  if (brd) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `products.brand_id = '${brd}'`;
  }
  if (range && start) {
    const { rows } = await db.query(
      `select distinct products.* from products, category_product ${filter_sql} order by products.${sortBy} ${sortOrder} limit $1 offset $2`,
      [range, start]
    );
    return rows;
  }
  const { rows } = await db.query(
    `select distinct products.* from products, category_product ${filter_sql} order by products.${sortBy} ${sortOrder}`
  );
  return rows;
};

module.exports.totalProduct = async (req) => {
  var { rows } = await db.query("select count(*) as total from products");
  return rows[0];
};

module.exports.totalProductWithFilter = async (req) => {
  const { cat } = req.query;
  const { p_s, p_e } = req.query;
  const { brd } = req.query;
  var filter_sql = "where ";
  var first_fil = false;
  if (cat) {
    filter_sql =
      filter_sql +
      `(category_product.category_id = '${cat}' and category_product.product_id = products.product_id)`;
    first_fil = true;
  }
  if (p_s && p_e) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `(products.price between ${p_s} and ${p_e})`;
    first_fil = true;
  }
  if (brd) {
    if (first_fil) {
      filter_sql = filter_sql + " and ";
    }
    filter_sql = filter_sql + `products.brand_id = '${brd}'`;
  }
  console.log(
    `select count(distinct products.*) as total from products, category_product ${filter_sql}`
  );
  const { rows } = await db.query(
    `select count(distinct products.*) as total from products, category_product ${filter_sql}`
  );
  return rows[0];
};

module.exports.getProductById = async (id) => {
  const { rows } = await db.query(
    "select * from products where product_id = $1",
    [id]
  );
  return rows[0];
};

module.exports.getSameCategoryProduct = async (id) => {
  const { rows } = await db.query(
    "select pd.* from products pd, category_product cpd1, category_product cpd2 where cpd1.product_id = $1 and cpd2.category_id = cpd1.category_id and pd.product_id = cpd2.product_id",
    [id]
  );
  return rows;
};

module.exports.getProductTable = async () => {
  var { rows } = await db.query(
    "select pd.product_id, pd.product_name, b.brand_name, pd.created_date, pd.price, pd.product_stock, pd.hidden from products pd, brands b where b.brand_id = pd.brand_id"
  );
  return rows;
};

module.exports.updateProduct = async (
  product_id,
  product_name,
  brand_id,
  category_id,
  price,
  description,
  product_image,
  product_stock,
  hidden
) => {
  await db.query(
    "update products set product_name = $2, brand_id = $3, price = $4, description = $5, product_image = $6, product_stock = $7, hidden = $8 where product_id = $1",
    [
      product_id,
      product_name,
      brand_id,
      price,
      description,
      product_image,
      product_stock,
      hidden,
    ]
  );
  await db.query("delete from category_product where product_id = $1", [
    product_id,
  ]);
  await db.query(
    "insert into category_product(category_id, product_id) values ($1, $2)",
    [category_id, product_id]
  );
};

module.exports.addProduct = async (
  product_id,
  product_name,
  brand_id,
  category_id,
  price,
  description,
  product_image,
  product_stock,
  hidden
) => {
  await db.query(
    "insert into products (product_id, product_name, brand_id, description, price, product_image, product_stock, hidden) values($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      product_id,
      product_name,
      brand_id,
      description,
      price,
      product_image,
      product_stock,
      hidden,
    ]
  );

  await db.query(
    "insert into category_product(category_id, product_id) values ($1, $2)",
    [category_id, product_id]
  );
};
