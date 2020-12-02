const AutheticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.cjs');
const AutheticationController = require('./controllers/AutheticationController.cjs');
const SongsController = require('./controllers/SongsController.cjs');
const BookmarksController = require('./controllers/BookmarksController.cjs');

module.exports = (app) => {
  app.post(
    '/register',
    AutheticationControllerPolicy.register,
    AutheticationController.register
  );
  app.post('/login', AutheticationController.login);
  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.put('/songs/:songId', SongsController.put);
  app.post('/songs', SongsController.post);
  app.get('/bookmarks', BookmarksController.index);
  app.post('/bookmarks', BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete);
};
