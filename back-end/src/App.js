import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { sequelize } = require('./models/index.cjs');
const config = require('./config/config.cjs');

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
require('./Routes.cjs')(app);

/* sync({force: true}) drops all tables */
sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
