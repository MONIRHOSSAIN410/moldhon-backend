import mongoose from 'mongoose';

const entrepreneurSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    organization: {
      type: String,
      required: [true, 'Organization name is required'],
      trim: true
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true
    },
    focusArea: {
      type: String,
      required: [true, 'Focus area is required'],
      trim: true
    },
    shortBio: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Entrepreneur', entrepreneurSchema);