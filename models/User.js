const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  location: { lat: Number, lng: Number },
  interests: [String],
  preferences: {
    gender: String,
    ageRange: [Number],
    distance: Number
  },
  verified: { type: Boolean, default: false },
  profileCompleted: { type: Boolean, default: false },
  privacy: {
    showAge: { type: Boolean, default: true },
    showDistance: { type: Boolean, default: true },
    incognito: { type: Boolean, default: false }
  },
  premium: { type: Boolean, default: false },
  lastActive: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
