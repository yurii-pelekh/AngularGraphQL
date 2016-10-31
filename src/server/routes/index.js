const entry = require('./entry'),
    api = require('./api');

module .exports = function (app) {
    app.use('/', entry);
    app.use('/api', api);
};

