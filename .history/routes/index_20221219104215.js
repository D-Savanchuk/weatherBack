const express = require('express');
const passport = require('passport');

require('../config/passport')(passport);

const router = express.Router();
