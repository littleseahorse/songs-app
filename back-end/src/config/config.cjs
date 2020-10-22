module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'songs-app',
    user: process.env.DB_USER || 'songs-app',
    password: process.env.DB_PASS || 'songs-app',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './songs-app.sqlite',
    },
  },
};
