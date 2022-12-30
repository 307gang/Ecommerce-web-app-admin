const db = require("./database");
const { v4: uuidv4 } = require("uuid");

async function generateUUID() {
  console.log("genID");
  var { rowCount, rows } = await db.query("select uuid from users");
  while (true) {
    var exist = false;
    var id = uuidv4();
    for (let i = 0; i < rowCount; i++) {
      if (id == rows[i].uuid) exist = true;
    }
    if (exist) continue;
    return id;
  }
}

module.exports.updateUser = async (id, fullname, phone, address) => {
  await db.query(
    "update customers set full_name = $1, phone_number = $2, address = $4 where uuid = $5",
    [fullname, phone, address, id]
  );
};

module.exports.getUserInfo = async (id) => {
  var { rows } = await db.query(
    "select c.* from customers c where c.uuid = $1",
    [id]
  );
  return rows[0];
};

module.exports.userExists = async (username) => {
  const { rowCount } = await db.query(
    "select * from users where username = $1",
    [username]
  );
  return rowCount > 0;
};

module.exports.addUser = async (email, password, fullname, phone, address) => {
  var uuid = await generateUUID();
  console.log("adding ...");
  await db.query(
    "insert into users (uuid, email, password, admin) values ($1, $2, $3, false)",
    [uuid, email, password]
  );
  await db.query(
    "insert into customers (uuid, full_name, phone_number, address) values ($1, $2, $3, $4)",
    [uuid, fullname, phone, address]
  );

  return uuid;
};

module.exports.getUserByEmail = async (email) => {
  var {rows} = await db.query(
    "select * from users where email = $1 limit 1",
    [email]
  );
  return rows[0];
};

module.exports.emailExists = async (email) => {
  console.log("checking ...")
  const {rowCount} = await db.query(
    "select * from users where email = $1 limit 1",
    [email]
  );
  console.log(rowCount);
  return rowCount > 0;
};