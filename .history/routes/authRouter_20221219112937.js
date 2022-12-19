const express = require('express');

const { registration, lo } = require('../controllers/auth');

const router = express.Router();

router.post('/signUp', registration);
router.post('/signUp', registration);


module.exports = router;

