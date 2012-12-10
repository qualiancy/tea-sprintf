module.exports = process.env.sprintf_COV
  ? require('./lib-cov/sprintf')
  : require('./lib/sprintf');
