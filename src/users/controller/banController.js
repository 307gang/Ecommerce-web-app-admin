const model = require("../models/banUser");

module.exports = async (req, res) => {
  const { id } = req.params;
  var { banned } = req.body;
  if (banned == "on") banned = true;
  else banned = false;
  try {
    await model(id, banned);
  } catch (e) {
    console.log(e);
    res.redirect(`./users/${id}`);
  }
  res.redirect("/users");
};
