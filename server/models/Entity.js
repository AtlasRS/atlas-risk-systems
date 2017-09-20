const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define asset model
const entitySchema = new Schema({
  legal_name: { type: String, required: true },
  do_business_as: { type: String, required: true },
  address_1: { type: String, required: true },
  address_2:	{ type: String, default: null },
  city:	{ type: String, required: true },
  state:	{ type: String, required: true },
  country:	{ type: String, required: true },
  postal_code:	{ type: String, required: true},
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// Tells mongoose we want to create a new collection called entities
mongoose.model('entities', entitySchema);
