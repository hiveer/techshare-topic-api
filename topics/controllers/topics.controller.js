const TopicModel = require('../models/topics.model');

exports.getById = (req, res) => {
  TopicModel.findById(req.params.topicId)
    .then((result) => {
      res.status(200).send(result);
    });
};

exports.findAll = (req, res) => {
  TopicModel.topics(req.query)
    .then((results) => {
      res.status(200).send(results);
    });
};

exports.createTopic = (req, res) => {
  TopicModel.createTopic(req.body)
    .then((result) => {
      res.status(200).send(result);
    });
}

exports.updateTopic = (req, res) => {
  let params = req.body;
  TopicModel.updateTopic({'_id': req.params['topicId']}, params)
    .then((result) => {
      res.status(200).send(result);
    });
}

exports.deleteTopic = (req, res) => {
  let params = {};
  params['_id'] = req.params['topicId'];
  TopicModel.deleteTopic(params)
    .then((result) => {
      res.status(200).send(result);
    });
}
