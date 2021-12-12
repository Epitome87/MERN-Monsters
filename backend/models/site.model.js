import mongoose from 'mongoose';

const siteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    // date: { type: Date, required: true, default: Date.now },
    // coordinates: { type: [Number], required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Site = mongoose.model('Site', siteSchema);

export default Site;
