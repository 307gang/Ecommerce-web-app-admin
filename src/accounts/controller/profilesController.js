const Ajv = require("ajv");
const format = require("ajv-formats");

const db = require("../../database/model/user");
const profileSchema = require("../models/profileSchema");

const ajv = new Ajv();
format(ajv);

exports.profileStep = (req, res) => {
  if (!req.user) res.redirect("/");
  var { id } = req.user;
  (async () => {
    var userinfo = await db.getAdminInfo(id);
    console.log(userinfo);
    res.render("profile", { userinfo });
  })();
};

exports.profileUpdate = async (req, res) => {
  var { id } = req.user;
  if (!ajv.validate(profileSchema, req.body)) {
    return;
  }

  const { "full-name": fullname, phone, email } = req.body;
  try {
    await db.updateAdmin(id, fullname, phone, email);
  } catch (e) {
    return;
  }
  res.redirect("/account/info");
};
