require('dotenv');
const jwt = require('jsonwebtoken');

const { User, Sequelize: { or } } = require('../../models');
const { OK, BAD_REQUEST } = require('../../constants/responseStatuses');
const { INVALID_DATA, USER_ALREADY_CREATED } = require('../../constants/responseMessages');


function createToken(id) {
  const token = jwt.sign(id, process.env.SECRET_KEY);
  return token;
}

module.exports = {


  async registration(req, res) {
    try {
      const {
        body: {
          login,
          email,
          password,
        },
      } = req;
      const newUser = {
        login: login.trim(),
        email: email.trim(),
        password,
      };

      if (newUser.login === ''
      || newUser.password === ''
      || newUser.email === '') {
        return res.status(BAD_REQUEST).send({ message: INVALID_DATA });
      }
      const existingUser = await User.findOne({
        where: or(
          { login },
          { email },
        ),
      });
      if (existingUser) {
        return res.status(BAD_REQUEST).send({ message: USER_ALREADY_CREATED });
      }
      const user = await User.create(newUser);
      const token = createToken(user.id);
      return res.status(OK).send({ user, token });
    } catch (error) {
      return res.status(BAD_REQUEST).send(error);
    }
  },
};
