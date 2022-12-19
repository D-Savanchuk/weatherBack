const express = require('express');

const { auth:{registration, login} } = require('../controllers');

const router = express.Router();

router.post('/signUp', registration);
router.post('/signUp', login);


module.exports = router;

