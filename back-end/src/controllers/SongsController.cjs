//const { Songs } = require('../models/Songs.cjs');
const db = require('../models/index.cjs');

module.exports = {
  async index(req, res) {
    try {
      const songs = await db.Song.findAll({
        limit: 20,
      });
      res.send(songs);
    } catch (error) {
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to fetch the songs again.',
      });
    }
  },
  async post(req, res) {
    try {
      const song = await db.Song.create(req.body);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to create the song again.',
      });
    }
  },
};
