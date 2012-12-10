/*!
 * tea-sprintf
 * Copyright(c) 2012 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/**
 * ### sprintf (message[, arg, ...])
 *
 * Coax any number of arguments into a stringed
 * message.
 *
 * @param {String} message
 * @param {Mixed} objects ...
 * @return {String} result
 * @attr simplified from `require('util').format` in node.js
 * @api public
 */

module.exports = function (msg) {
  var args = [].slice.call(arguments, 1)
    , i = 0
    , len = args.length
    , res, str;

  res = msg
    .replace(/%[sdj%]/g, function (str) {
      if (i >= len) return str;
      if ('%%' === str) return str;
      if ('%s' === str) return String(args[i++]);
      if ('%d' === str) return Number(args[i++]);
      if ('%j' === str) return JSON.stringify(args[i++]);
      return str;
    });

  if (i < len - 1) {
    for (; i < len; i++) {
      str = args[i];
      if ('string' == typeof str) res += ' ' + str;
      else if ('number' == typeof str) res += ' ' + str;
      else res += ' ' + JSON.stringify(str);
    }
  }

  return res;
};
