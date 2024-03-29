const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const { NOT_FOUND, INTERNAL_SERVICE_ERROR } = require('./constants/responseStatuses');

const authRouter = require('./routes/authRouter');
const weatherRouter = require('./routes/weatherRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/weather', weatherRouter);


app.use((req, res, next) => {
  next(createError(NOT_FOUND));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || INTERNAL_SERVICE_ERROR);
  res.render('error');
});

module.exports = app;
