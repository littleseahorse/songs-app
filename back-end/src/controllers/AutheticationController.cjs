const db = require('../models/index.cjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.cjs');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await db.User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (error) {
      res.status(400).send({
        error: 'This email address is already being used.',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await db.User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'The login credentials are incorrect.',
        });
      }

      const isPasswordValid = user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login credentials are incorrect.',
        });
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (error) {
      res.status(500).send({
        error: 'Oops, something went wrong! Please try to login again.',
      });
    }
  },
};
