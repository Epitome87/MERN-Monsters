import express from 'express';
import Review from '../models/review.model.js';
import Site from '../models/site.model.js';
import User from '../models/user.model.js';

const router = express.Router({ mergeParams: true });

// Get all Reviews, regardless of the Author or Site
// router.route('/').get(async (req, res) => {
//   try {
//     const reviews = await Review.find().populate('author');
//     console.log(`List of Reviews`, reviews);
//     res.json(reviews);
//   } catch (err) {
//     res.status(400).json('Error: ' + err);
//   }
// });

// Get all Reviews for specified Site
router.route('/').get(async (req, res) => {
  const { siteId } = req.params;

  try {
    const site = await Site.findById(siteId).populate({
      path: 'reviews',
      model: 'Review',
      populate: { path: 'author', model: 'User' },
    });
    const reviews = site.reviews;

    console.log(`List of Reviews`, reviews);
    res.json(reviews);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.route('/:reviewId').get(async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await Review.findById(reviewId).populate('author');
    res.json(review);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add a new Review to the appropriate Site
router.route('/').post(async (req, res) => {
  const { body, rating } = req.body;
  const { siteId } = req.params;

  // Which Site should this Review be associated with?
  const site = await Site.findById(siteId);

  // Hard-coded (For now) Author of this Review
  const authorId = await User.findOne({ username: 'Matthew' }).exec();

  const newReview = new Review({ body, rating, author: authorId._id });

  // Add the Review to the Site's Review list
  site.reviews.push(newReview);

  try {
    const saveNewReview = await newReview.save();
    await site.save();

    console.log(`New Review has been added on ${Date().toString()}`);
    console.log('-- Review: ', newReview);
    res.json('Review added!');
  } catch (err) {
    console.log(`Failed to add Review on ${Date().toString()}`);
    res.status(400).json(`Failed to add Review on ${Date().toString()}:` + err);
  }
});

router.route('/:reviewId').delete(async (req, res) => {
  console.log('Attempting to GET a specific Review');
  const { siteId, reviewId } = req.params;

  try {
    const site = await Site.findByIdAndUpdate(siteId, {
      $pull: { reviews: reviewId },
    });

    res.json(`Review deleted successfully on ${Date().toString()}`);
  } catch (err) {
    res
      .status(400)
      .json(`Failed to delete Review on ${Date().toString()}:` + err);
  }
});

export default router;
