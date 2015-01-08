var americano = require('americano');

var port = process.env.PORT || 9250;

module.exports.start = function (options, callback) {
  if (options === undefined) options = {};
  options.name = 'template app';
  options.root = options.root || __dirname;
  options.port = options.port || process.env.PORT || 9250;
  options.host = options.host || process.env.HOST || '0.0.0.0';
  americano.start(options, function (app, server) {
    if (callback !== undefined) callback(null, app, server);
  });
};

if (!module.parent) {
   module.exports.start();
}
