import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "User can't be created without email."],
  },
  name: {
    type: String,
    default: '',
  },
  emailVerified: {
    type: Date,
    default: null,
  },
  image: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    default: '',
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
