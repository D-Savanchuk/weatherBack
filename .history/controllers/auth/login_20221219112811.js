require('dotenv');
const jwt = require('jsonwebtoken');


const { User } = require('../../models');
const { OK, BAD_REQUEST } = require('../../constants/responseStatuses');
const {
  INVALID_DATA,
  INVALID_PASSWORD,
  INVALID_LOGIN,
} = require('../../constants/responseMessages');

function createToken(id) {
  const token = jwt.sign(id, process.env.SECRET_KEY);
  return token;
}

module.exports = {
  async login(req, res) {
    try {
      const { body: { login, password } } = req;
      const payload = { login: login.trim(), password };
      if (payload.login === '' || payload.password === '') {
        return res.status(BAD_REQUEST).send({ message: INVALID_DATA });
      }
      const user = await User.findOne({
        where: {
          login: payload.login,
        },
      });
      if (!user) {
        return res.status(BAD_REQUEST).json({ message: INVALID_LOGIN });
      }
      const isPasswordValid = await user.comparePassword(payload.password);
      if (!isPasswordValid) {
        return res.status(BAD_REQUEST).json({ message: INVALID_PASSWORD });
      }
      const token = createToken(user.id);
      delete user.dataValues.password;
      return res.status(OK).send({ user, token });
    } catch (error) {
      return res.status(BAD_REQUEST).send(INVALID_DATA);
    }
  },
};
