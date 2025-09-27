import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  avatar_url: String,
  is_premium: {
    type: Boolean,
    default: false
  },
  community: {
    type: String,
    enum: ['madrid', 'cataluna'],
    required: true
  },
  auth_id: {
    type: String,
    required: true,
    unique: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
