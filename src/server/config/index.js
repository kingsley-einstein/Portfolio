const path = require('path');
const clientRouter = require('../client');
const mailRouter = require('../routes');

module.exports = (app, {json, statics, urlencoded, logger}) => {
  app.use(json());
  app.use(urlencoded({
    extended: true
  }));
  app.use(statics(path.join(__dirname, '../../client/static'), {
    setHeaders: (res, loc, stat) => {
      res.set('Service-Worker-Allowed', '/');
    }
  }));
  app.use(logger('dev'));
  app.use('/', clientRouter);
  app.use('/mail', mailRouter);
};
