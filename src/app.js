const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const hbs = require("hbs");

const dashboardRoute = require("./dashboard/routes/indexRoute");
const accountRoute = require("./accounts/routes/accountRoute");
const usersRoute = require("./users/routes/usersRoute");
const itemsRoute = require("./items/routes/itemsRoute");
const newItemRoute = require("./items/routes/newItemRoute");
const brandsRoute = require("./brands/routes/brandsRoute");

const productDatabase = require("./database/routes/productsRoute");
const categoryDatabase = require("./database/routes/categoriesRoute");
const brandDatabase = require("./database/routes/brandsRoute");
const totalDatabase = require("./database/routes/totalRoute");
const userDatabase = require("./database/routes/usersRoute");

const imgRoute = require("./imgAuth/routes/authRoute");

const PORT = 8080;

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));

hbs.registerHelper("block", function (name) {
  let val = (blocks[name] || []).join("\n");
  blocks[name] = [];
  return val;
});

//view
var viewLocation = [
  path.join(__dirname, "/public/assets"),
  path.join(__dirname, "/dashboard/view"),
  path.join(__dirname, "/table/view"),
  path.join(__dirname, "/accounts/view"),
  path.join(__dirname, "/users/view"),
  path.join(__dirname, "/items/view"),
  path.join(__dirname, "/brands/view"),
  path.join(__dirname, "/error"),
];

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", viewLocation);
app.set("view engine", "hbs");

// url routing
app.get("/", (req, res) => {
  res.redirect("/dashboard");
});
app.use("/dashboard", dashboardRoute);
app.use("/account", accountRoute);
app.use("/users", usersRoute);
app.use("/shop-items", itemsRoute);
app.use("/new-items", newItemRoute);
app.use("/shop-brands", brandsRoute);
app.use("/api/product", productDatabase);
app.use("/api/brand", brandDatabase);
app.use("/api/category", categoryDatabase);
app.use("/api/total", totalDatabase);
app.use("/api/user", userDatabase);
app.use("/auth", imgRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status).render("404", { layout: false });
});

app.listen(PORT, () =>
  console.log(
    `Server started on port ${PORT} and running on http://localhost:${PORT}`
  )
);

module.exports = app;
