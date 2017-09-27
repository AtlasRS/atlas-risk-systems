const mongoose = require('mongoose');
const Asset = mongoose.model('assets');

// get one asset with via url param
exports.getAsset = (req, res, next) => {
  Asset.findById(req.params.id, (err, asset) => {
    if (err) return res.status(404).send({ error: err });
    return res.status(200).json(asset);
  });
}

// get all assets from entitiy collection via entity id that is ref on asset model
exports.getAssets = (req, res, next) => {
  let result = [];
  req.entities.forEach(entity => {
    Asset.find({ _entity: entity._id }, (err, assets) => {
      if (err) return res.status(404).send({ error: err });
      result = [...result, ...assets];
    })
  })
  req.assets = result;
  next();
}

exports.postAsset = (req, res, next) => {
  Asset.findOne({ asset_name: req.body.asset_name }, (err, existingAsset) => {
    if (err) return next(err);
    if (existingAsset) return res.status(422).send({ error: 'Asset already exists' });

    Asset.create(req.body, (err, asset) => {
      if (err) return res.status(418).send({ error: err });
      return res.status(200).json(asset);
    });
  });
}

// update an asset
exports.updateAsset = (req, res, next) => {
  Asset.findByIdAndUpdate({ _entity: req.params.id }, { $set: req.body }, { new: true }, (err, updatedAsset) => {
    if (err) return res.status(404).send({ error: err });
    res.status(200).json(updatedAsset);
  });
}

// delete an asset
exports.deleteAsset = (req, res, next) => {
  Asset.findByIdAndRemove(req.params.id, (err, deletedAsset) => {
    if (err) return res.status(404).send({ error: err });
    const response = { message: 'Entry successfully deleted', _id: req.params.id };
    res.status(200).json(response);
  });
}
