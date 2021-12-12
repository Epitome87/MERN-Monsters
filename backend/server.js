import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import './config.js'; // Where our dotenv configuration is managed
import sitesRouter from './routes/sites.js';
import usersRouter from './routes/users.js';
import reviewsRouter from './routes/reviews.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Testing
app.use(express.urlencoded({ extended: true }));


const URI = process.env.ATLAS_URI;

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

app.use('/users', usersRouter);
app.use('/sites', sitesRouter);
app.use('/sites/:siteId/reviews', reviewsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('L U L ');
});
