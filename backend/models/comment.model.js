import mongoose from 'mongoose';

/* A Comment is associated with a Review, as well as a User who authored the Comment. */
const CommentSchema = new mongoose.Schema(
  {
    body: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Comment = mongoose.Model('Comment', CommentSchema);

export default Comment;
