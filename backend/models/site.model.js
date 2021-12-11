import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const siteSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Site = mongoose.model('Site', siteSchema);

export default Site;
