const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define asset model
const assetSchema = new Schema({
  asset_name: { type: String, required: false },
  asset_description: { type: String, required: false },
  address_1: { type: String, required: false },
  address_2:	{ type: String },
  city:	{ type: String, required: false },
  state:	{ type: String, required: false },
  country:	{ type: String, required: false },
  postal_code:	{ type: String, required: false },
  vehicle_type:	{ type: String, required: false },
  vin_number:	{ type: String, required: false },
  year:	{ type: String, required: false },
  make:	{ type: String, required: false },
  model:	{ type: String, required: false },
  gross_weight:	{ type: String, required: false },
  operating_radius:	{ type: String, required: false },
  entity_name: { type: String, required: false },
  _entity:	{ type: Schema.Types.ObjectId, ref: 'Entity', required: false }
});

// Tells mongoose we want to create a new collection called assets
mongoose.model('assets', assetSchema);
