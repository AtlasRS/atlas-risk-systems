const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

// Define user model
const userSchema = new Schema({
  googleId: String,
  first_name: String,
  last_name: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  isVerified: { type: Boolean, default: false }
  // sharedEntities: [{entity: "name", role: "role"}, {entity: "name", role: "role"}, {entity: "name", role: "role"}]
});

// On save hook, encrypt password
// Function will run before saving a model
userSchema.pre('save', function(next) {
  const user = this;
  // Generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    // Hash password using the generated salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      // Overwrite plain text with encrypted password
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
}

// Tells mongoose we want to create a new collection called users
mongoose.model('users', userSchema);
