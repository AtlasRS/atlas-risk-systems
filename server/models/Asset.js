const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define asset model
const assetSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  admin: { type: Boolean, default: false }
});

// Tells mongoose we want to create a new collection called users
mongoose.model('assets', assetSchema);
