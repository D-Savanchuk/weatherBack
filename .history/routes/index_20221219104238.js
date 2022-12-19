const express = require('express');

const router = express.Router();

const { auth: { login, registration, getUserByToken } } = require('../controllers');

