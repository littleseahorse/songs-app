const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.cjs');

const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== 'index.cjs' &&
      file.slice(-4) === '.cjs'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// fs.readdirSync(__dirname)
//   .filter((file) => file !== 'index.cjs')
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
