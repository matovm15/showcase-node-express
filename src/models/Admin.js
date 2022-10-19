import mongoose from 'mongoose';

const { Schema } = mongoose;

const Admin = new Schema({
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
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('admin', Admin);
