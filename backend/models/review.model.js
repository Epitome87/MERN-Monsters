import mongoose from 'mongoose';

/* A Review is associated with a Site, as well as a User who authored the Review. */
const ReviewSchema = new mongoose.Schema({
  body: { type: String },
  rating: { type: Number, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
