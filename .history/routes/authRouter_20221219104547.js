const express = require('express');

const { registration } = require('../controllers/auth');

const router = express.Router();

router.post('/signUp', registration);

module.exports = router;
