const TopicModel = require('../models/topics.model');

exports.getById = (req, res) => {
  TopicModel.findById(req.params.topicId)
    .then((result) => {
      res.status(200).send(result);
    });
};

exports.findAll = (req, res) => {
  TopicModel.topics()
    .then((results) => {
      console.log(results);
      res.status(200).send(results);
    });
};

exports.createTopic = (req, res) => {
  console.log('create: req body');
  console.log(req.body);
  TopicModel.createTopic(req.body)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    });
}

exports.updateTopic = (req, res) => {
  let params = req.body;
  console.log('update: req payload');
  console.log(params);
  console.log(req.params['topicId']);
  TopicModel.updateTopic({'_id': req.params['topicId']}, params)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    });
}

exports.deleteTopic = (req, res) => {
  let params = {};
  params['_id'] = req.params['topicId'];
  console.log('delete: topic id');
  console.log(params);
  TopicModel.deleteTopic(params)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    });
}
