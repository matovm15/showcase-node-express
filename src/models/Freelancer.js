import mongoose from 'mongoose';

const { Schema } = mongoose;

const Freelancer = new Schema({
  name: [
    {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
  ],
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
  },
  email_is_verified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: null,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('freelancer', Freelancer);
