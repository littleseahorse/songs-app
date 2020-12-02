const db = require('../models/index.cjs');

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      // console.log(songId, userId);
      const bookmark = await db.Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      // console.log(bookmark);
      res.send(bookmark);
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
