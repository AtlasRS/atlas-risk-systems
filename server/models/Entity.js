const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define asset model
const entitySchema = new Schema({
  legal_name: { type: String, required: false },
  do_business_as: { type: String, required: false },
  address_1: { type: String, required: false },
  address_2:	{ type: String, default: null },
  city:	{ type: String, required: false },
  state:	{ type: String, required: false },
  country:	{ type: String, required: false },
  postal_code:	{ type: String, required: true},
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: false }
});

// Tells mongoose we want to create a new collection called entities
mongoose.model('entities', entitySchema);
