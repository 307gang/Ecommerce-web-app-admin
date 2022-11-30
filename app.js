const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const indexRoute = require('./index/route/indexRoute');
const accountRoute = require('./accounts/route/accountRoute');
const usersRoute = require('./users/route/usersRoute');
const itemsRoute = require('./items/route/itemsRoute');
const brandsRoute = require('./brands/route/brandsRoute');

const PORT = 8080;

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan('dev'));

//view
var viewLocation = ['./index/view', './table/view', './accounts/view', './users/view', './items/view', './brands/view', './error'];

app.use(express.static('public'));
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
