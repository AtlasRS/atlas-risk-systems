const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define asset model
const assetSchema = new Schema({
  asset_name: { type: String, required: true },
  asset_description: { type: String, required: true },
  address_1: { type: String, required: true },
  address_2:	{ type: String },
  city:	{ type: String, required: true },
  state:	{ type: String, required: true },
  country:	{ type: String, required: true },
  postal_code:	{ type: String, required: true},
  vehicle_type:	{ type: String, required: true},
  vin_number:	{ type: String, required: true},
  year:	{ type: String, required: true},
  make:	{ type: String, required: true},
  model:	{ type: String, required: true},
  gross_weight:	{ type: String, required: true},
  operating_radius:	{ type: String, required: true},
  _entity:	{ type: Schema.Types.ObjectId, ref: 'Entity', required: true }
});

// Tells mongoose we want to create a new collection called assets
mongoose.model('assets', assetSchema);
