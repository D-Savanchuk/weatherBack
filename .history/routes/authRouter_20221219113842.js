const express = require('express');


const router = express.Router();

const { { registration, login } } = require('../controllers/auth');

router.post('/signUp', registration);
router.post('/signUp', login);


module.exports = router;

