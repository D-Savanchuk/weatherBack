const express = require('express');
const passport = require('passport');

require('../config/passport')(passport);

const router = express.Router();

const {  registration, login, getUserByToken  } = require('../controllers/auth');

router.post('/signUp', registration);
router.post('/login', login);
router.get('/', passport.authenticate('jwt', { session: false }), getUserByToken);

module.exports = router;

