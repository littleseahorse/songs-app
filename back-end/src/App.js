import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    message: `Hello, ${req.body.email}! Have fun!`,
  });
});

app.listen(process.env.PORT || 8081);
