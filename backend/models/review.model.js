import mongoose from 'mongoose';

/* A Review is associated with a Site, as well as a User who authored the Review. */
const ReviewSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  title: { type: String },
  body: { type: String },
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
