import mongoose, { Schema } from 'mongoose';

const PhoneSchema = new Schema({
  name: { type: String },
  available: { type: Boolean, default: true },
  bookedAt: { type: Date },
  bookedBy: { type: String },
  technology: { type: String },
  twoGBands: { type: String },
  threeGBands: { type: String },
  fourGBands: { type: String },
});

const Phones = mongoose.model('phones', PhoneSchema);

export default Phones;
