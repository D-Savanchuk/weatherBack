const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

require('dotenv');

const { User } = require('../models');

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET_KEY,
};

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (async (jwtPayload, done) => {
    try {
      const user = await User.findOne({ where: { id: jwtPayload } });
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) { return done(err, false); }
  })));
};
