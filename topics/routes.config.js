const TopicsController = require('./controllers/topics.controller');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
  app.get('/topics/:topicId', [
    TopicsController.getById
  ]);

  app.get('/topics', [
    TopicsController.findAll
  ]);

  app.post('/topics', [
    TopicsController.createTopic
  ]);

  app.patch('/topics/:topicId', [
    TopicsController.updateTopic
  ]);

  app.delete('/topics/:topicId', [
    TopicsController.deleteTopic
  ]);
};
