const express = require('express');

const { auth: { login, registration, getUserByToken } } = require('../controllers');

const router = express.Router();


