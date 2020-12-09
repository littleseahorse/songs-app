const db = require('../models/index.cjs');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const { userId } = req.query;
      let histories = await db.History.findAll({
        where: {
          UserId: userId,
        },
        include: [
          {
            model: db.Song,
          },
        ],
      });
      // console.log(histories);
      histories = histories
        .map((history) => history.toJSON())
        .map((history) =>
          _.extend(
            {},
            {
              id: history.id,
              songId: history.Song.id,
              title: history.Song.title,
              artist: history.Song.artist,
              visited: JSON.stringify(history.createdAt).substring(1, 11),
            }
          )
        );
      // console.log(histories);
      res.send(histories);
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to fetch the history again.',
      });
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body.params;
      // console.log(songId, userId);
      let history = await db.History.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      // console.log(history);
      const createHistory = async function () {
        history = await db.History.create({
          SongId: songId,
          UserId: userId,
        });
        // console.log(history);
        res.send(history);
      };
      if (history) {
        await history.destroy();
        // console.log(history);
        createHistory();
      } else {
        createHistory();
      }
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to create the history record again.',
      });
    }
  },
};
