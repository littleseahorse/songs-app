const AutheticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.cjs');
const AutheticationController = require('./controllers/AutheticationController.cjs');
const SongsController = require('./controllers/SongsController.cjs');

module.exports = (app) => {
  app.post(
    '/register',
    AutheticationControllerPolicy.register,
    AutheticationController.register
  );
  app.post('/login', AutheticationController.login);
  app.get('/songs', SongsController.index);
  app.post('/songs', SongsController.post);
};
