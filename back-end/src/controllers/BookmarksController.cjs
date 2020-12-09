const db = require('../models/index.cjs');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      // console.log(songId, userId);
      let where = {};
      if (songId) {
        where = {
          SongId: songId,
          UserId: userId,
        };
      } else {
        where = {
          UserId: userId,
        };
      }
      let bookmarks = await db.Bookmark.findAll({
        where: where,
        include: [
          {
            model: db.Song,
          },
        ],
      });
      // console.log(bookmarks);
      bookmarks = bookmarks
        .map((bookmark) => bookmark.toJSON())
        .map((bookmark) =>
          _.extend(
            {},
            {
              id: bookmark.id,
              songId: bookmark.Song.id,
              title: bookmark.Song.title,
              artist: bookmark.Song.artist,
              bookmarked: JSON.stringify(bookmark.createdAt).substring(1, 11),
            }
          )
        );
      // console.log(bookmarks);
      res.send(bookmarks);
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to fetch the bookmark again.',
      });
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body.params;
      // console.log(songId, userId);
      const bookmark = await db.Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: 'You have already bookmarked it.',
        });
      } else {
        const newBookmark = await db.Bookmark.create({
          SongId: songId,
          UserId: userId,
        });
        // console.log(newBookmark);
        res.send(newBookmark);
      }
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to create the bookmark again.',
      });
    }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      // console.log(bookmarkId);
      const bookmark = await db.Bookmark.findByPk(bookmarkId);
      await bookmark.destroy();
      // console.log(bookmark);
      res.send(bookmark);
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        error:
          'Oops, something went wrong! Please try to delete the bookmark again.',
      });
    }
  },
};
