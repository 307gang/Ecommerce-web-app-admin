module.exports = (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/");
};
