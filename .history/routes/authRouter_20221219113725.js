const express = require('express');


const router = express.Router();

const { auth: { registration, login } } = require('../');

router.post('/signUp', registration);
router.post('/signUp', login);


module.exports = router;

