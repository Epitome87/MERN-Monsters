import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import './config.js'; // Where our dotenv configuration is managed
import sitesRouter from './routes/sites.js';
import usersRouter from './routes/users.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

// const client = await MongoClient.connect(URI);
// const database = client.db();
// client.close();

// Database connection
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected!');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/sites', sitesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('L U L ');
});
