const express = require('express');


const router = express.Router();

const {  registration, login  } = require('../controllers/auth');

router.post('/signUp', registration);
router.post('/login', login);
router.get('/', passport.authenticate('jwt', { session: false }), getUserByToken);



module.exports = router;

