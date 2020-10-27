const AutheticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.cjs');
const AutheticationController = require('./controllers/AutheticationController.cjs');

module.exports = (app) => {
  app.post(
    '/register',
    AutheticationControllerPolicy.register,
    AutheticationController.register
  );
  app.post(
    '/login',
    // AutheticationControllerPolicy.register,
    AutheticationController.login
  );
};
