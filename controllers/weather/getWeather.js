
const { OK, BAD_REQUEST } = require('../../constants/responseStatuses');

module.exports = {
  getWeather(req, res) {
    try {
      console.log('body: ',req.body);
      const {url} = req.body;
      return res.status(OK).send(url);
    } catch (error) {
      return res.status(BAD_REQUEST).send(error);
    }
  },
};
