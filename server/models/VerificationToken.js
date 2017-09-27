const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

mongoose.model('tokens', tokenSchema);
