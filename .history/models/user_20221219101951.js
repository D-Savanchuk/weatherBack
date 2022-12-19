const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};