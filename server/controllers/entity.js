const mongoose = require('mongoose');
const Entity = mongoose.model('entities');

// get one entity with via url param
exports.getEntity = (req, res, next) => {
  Entity.findById(req.params.id, (err, entity) => {
    if (err) return res.status(404).send({ error: err });
    return res.status(200).json(entity);
  });
}

// get all entities from entitiy collection via user id that is ref on entity model
exports.getEntities = (req, res, next) => {
  Entity.find({ _user: { $in: [req.params.id] } }, (err, entities) =>  {
    if (err) return res.status(404).send({ error: err });
    res.status(200).json(entities);
  });
}

// post an entity to the entities collection
exports.postEntity = (req, res, next) => {
  Entity.findOne({ legal_name: req.body.legal_name }, (err, existingEntity) => {
    if (err) return next(err);
    if (existingEntity) return res.status(422).send({ error: 'Entity already exists' });

    Entity.create(req.body, (err, entity) => {
      if (err) return res.status(404).send({ error: err });
      return res.status(200).json(entity);
    });
  });
}

// update an entity
exports.updateEntity = (req, res, next) => {
  Entity.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, (err, updatedEntity) => {
    if (err) return res.status(404).send({ error: err });
    res.status(200).json(updatedEntity);
  });
}

// delete an entity
exports.deleteEntity = (req, res, next) => {
  Entity.findByIdAndRemove(req.params.id, (err, deletedEntity) => {
    if (err) return res.status(404).send({ error: err });
    const response = { message: 'Entry successfully deleted', _id: req.params.id };
    res.status(200).json(response);
  });
}
