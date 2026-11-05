/* eslint-disable */

function isPrimitive(value) {
  var type = typeof value;
  return (
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined' ||
    value === null
  );
}

function serializer(args) {
  if (args.length === 1 && isPrimitive(args[0])) {
    return args[0];
  }
  var obj = {};
  for (var i = 0; i < args.length; i++) {
    obj['key' + i] = args[i];
  }
  return JSON.stringify(obj);
}

function memoize(fn) {
  var cache = {};

  return function (a, b, c, d, e, f, g) {
    var key = serializer([a, b, c, d, e, f, g]);
    if (cache[key] === undefined) {
      cache[key] = fn(a, b, c, d, e, f, g);
    }
    return cache[key];
  };
}

module.exports = memoize;
