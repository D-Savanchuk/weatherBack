const express = require('express');

const { registration, login } = require('../controllers/auth');

const router = express.Router();

router.post('/signUp', registration);
router.post('/signUp', login);


module.exports = router;

