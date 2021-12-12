import express from 'express';
import Review from '../models/review.model.js';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const reviews = await Review.find();
    console.log(`List of Reviews`, reviews);
    res.json(reviews);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/').post(async (req, res) => {
  const { body, rating } = req.body;
  const authorId = await User.findOne({ username: 'Matthew' }).exec();

  const newReview = new Review({ body, rating, author: authorId._id });

  try {
    const saveNewReview = await newReview.save();
    console.log(`New Review has been added on ${Date().toString()}`);
    console.log('-- Review: ', newReview);
    res.json('Review added!');
  } catch (err) {
    console.log(`Failed to add Review on ${Date().toString()}`);
    res.status(400).json(`Failed to add Review on ${Date().toString()}:` + err);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    res.json(`Review deleted successfully on ${Date().toString()}`);
  } catch (err) {
    res
      .status(400)
      .json(`Failed to delete Review on ${Date().toString()}:` + err);
  }
});

export default router;
