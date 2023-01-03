const path = require("path");

module.exports = (req, res) => {
  //   console.log(req.user);
  if (!req.user) res.redirect("/");
  res.render("index");
};
