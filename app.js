const config = require('./common/config/env.config.js');

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const TopicsRouter = require('./topics/routes.config');

app.use(bodyParser.json());
app.use(cors());

TopicsRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});

module.exports = app;
