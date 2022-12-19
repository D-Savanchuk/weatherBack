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

  User.beforeSave(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, SALT_ROUNDS, null);
    }
  });
  User.prototype.comparePassword = function compare(password) {
    return new Promise((res, rej) => {
      bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
          return rej(err);
        }
        return res(isMatch);
      });
    });
  };


  return User;
};