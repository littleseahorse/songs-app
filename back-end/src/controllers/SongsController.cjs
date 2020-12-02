const db = require('../models/index.cjs');
const { Op } = require('sequelize');

module.exports = {
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;
      if (search) {
        songs = await db.Song.findAll({
          where: {
            [Op.or]: {
              title: {
                [Op.like]: `%${search}%`,
              },
              artist: {
                [Op.like]: `%${search}%`,
              },
              album: {
                [Op.like]: `%${search}%`,
              },
              genre: {
                [Op.like]: `%${search}%`,
              },
            },
          },
        });
      } else {
        songs = await db.Song.findAll({
          limit: 20,
        });
      }
      res.send(songs);
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to search for a song again.',
      });
    }
  },
  async show(req, res) {
    try {
      const song = await db.Song.findByPk(req.params.songId);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to fetch the song again.',
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
  async put(req, res) {
    try {
      const song = await db.Song.update(req.body, {
        where: {
          id: req.params.songId,
        },
      });
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to update the song again.',
      });
    }
  },
};
