const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const indexRoute = require('./index/route/indexRoute');
const accountRoute = require('./accounts/route/accountRoute');
const usersRoute = require('./users/route/usersRoute');
const itemsRoute = require('./items/route/itemsRoute');
const brandsRoute = require('./brands/route/brandsRoute');

const productDatabase = require("./database/route/productsRoute");
const categoryDatabase = require("./database/route/categoriesRoute");
const brandDatabase = require("./database/route/brandsRoute");
const totalDatabase = require('./database/route/totalRoute');

const PORT = 8080;

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan('dev'));

//view
var viewLocation = [
  path.join(__dirname, '/index/view'), 
  path.join(__dirname, '/table/view'), 
  path.join(__dirname, '/accounts/view'), 
  path.join(__dirname, '/users/view'), 
  path.join(__dirname, '/items/view'), 
  path.join(__dirname, '/brands/view'), 
  path.join(__dirname, '/error')
];

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', viewLocation);
app.set('view engine', 'hbs');

// url routing
app.get('/', (req, res) => {
  res.redirect('/dashboard')
});
app.use('/dashboard', indexRoute);
app.use('/account', accountRoute);
app.use('/users', usersRoute);
app.use('/shop-items', itemsRoute);
app.use('/shop-brands', brandsRoute);
app.use('/api/product', productDatabase);
app.use('/api/brand', brandDatabase);
app.use('/api/category', categoryDatabase);
app.use('/api/total', totalDatabase);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status).render("404");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT} and running on http://localhost:${PORT}`));

module.exports = app;
