const { registration } = require('./registration');
const { login } = require('./login');
const {getUserByToken} = req

module.exports = { registration, login, getUserByToken };
