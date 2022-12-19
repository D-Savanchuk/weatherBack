const { OK, BAD_REQUEST } = require('../../constants/responseStatuses');

module.exports = {
  getUserByToken(req, res) {
    try {
      const { user: { id, login } } = req;
      return res.status(OK).send({ id, login });
    } catch (error) {
      return res.status(BAD_REQUEST).send(error);
    }
  },
};
