const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topicTitle: String,
    owner: String,
    startDate: String,
    vote: Number,
    detail: String,
    status: {type: String, default: 'active'}
});

const Topic = mongoose.model('Topics', topicSchema);

exports.findById = (id) => {
  return Topic.findById(id)
    .then((result) => {
      result = result.toJSON();
      delete result._id;
      delete result.__v;
      return result;
    });
};

exports.topics = (params) => {
  return Topic.find(params).then((results) => {
    return results;
  });
};

exports.createTopic = (params) => {
  let newTopic = new Topic(params);
  return newTopic.save().then((res) => {
    return res;
  });
}

exports.updateTopic = (filter, params) => {
  return Topic.updateOne(filter, params)
    .then((res) => {
      return res;
    })
}

exports.deleteTopic = (params) => {
  return Topic.deleteOne(params)
    .then((res) => {
      return res;
    })
}
