const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a gallery image
const profileSchema = new Schema({
   about: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    default: '',
  },
  instagram: {
    type: String,
    default: '',
  },
  leadershipPosition: {
    type: String,
    default: '',
  },
  motivation: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: '',
  },
  post: {
    type: String,
    default: '',
  },
  profilePic: {
    type: String,
    default: '',
  },
  proskills: {
    type: String,
    default: '',
  },
  studentId: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    default: '',
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
export default mongoose.models.users ||
  mongoose.model('users', profileSchema);
