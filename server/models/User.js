const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// Tells mongoose we want to create a new collection called users
mongoose.model('users', userSchema);
