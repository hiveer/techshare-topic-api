const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topicTitle: String,
    owner: String,
    startDate: String,
    vote: Number,
    detail: String
});

//topicSchema.findById = function (cb) {
  //return this.model('Topics').find({id: this.id}, cb);
//};

const Topic = mongoose.model('Topics', topicSchema);

exports.findById = (id) => {
  return Topic.findById(id)
    .then((result) => {
      result = result.toJSON();
      console.log('result:');
      console.log(result);
      delete result._id;
      delete result.__v;
      return result;
    });
};

exports.topics = () => {
  return Topic.find({}).then((results) => {
    console.log('results:');
    console.log(results);
    return results;
  });
};

exports.createTopic = (params) => {
  let newTopic = new Topic(params);
  return newTopic.save().then((res) => {
    console.log(res);
    return res;
  });
}

exports.updateTopic = (filter, params) => {
  return Topic.updateOne(filter, params)
    .then((res) => {
      console.log(res);
      return res;
    })
}

exports.deleteTopic = (params) => {
  return Topic.deleteOne(params)
    .then((res) => {
      console.log(res);
      return res;
    })
}
