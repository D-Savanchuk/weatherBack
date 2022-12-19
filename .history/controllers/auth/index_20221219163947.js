const { registration } = require('./registration');
const { login } = require('./login');
const {getUserByToken} = require('./getUserByToken');

module.exports = { registration, login, getUserByToken };
