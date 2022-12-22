const express = require('express');
const request = require('request');

const router = express.Router();

const {  getWeather  } = require('../controllers/weather/getWeather');

router.post('/', getWeather);

// router.get('/', (req, res) => {
//     request(
//       'api.openweathermap.org/data/2.5/weather?lat=47&lon=40&units=metric&appid=8ac1ba9aaa7ab31874c9b9683d9ee2dc',
//       (err, response, body) => {
//         if (err) return res.status(500).send({ message: err })
//         console.log('BODY', body);
//         return res.send(body)
//       }
//     )
//   })

module.exports = router;

