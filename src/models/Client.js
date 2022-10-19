import mongoose from 'mongoose';

const { Schema } = mongoose;

const ClientSchema = new Schema({
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

  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('client', ClientSchema);
