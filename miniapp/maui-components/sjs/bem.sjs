var array = require('./array.sjs');
var object = require('./object.sjs');
var PREFIX = 'maui-';

function join(name, mods) {
  name = PREFIX + name;
  mods = mods.map(function (mod) {
    return name + '--' + mod;
  });
  mods.unshift(name);
  return mods.join(' ');
}

function traverse(mods, config) {
  if (!config) {
    return;
  }

  if (typeof config === 'string' || typeof config === 'number') {
    mods.push(config);
  } else if (array.isArray(config)) {
    config.forEach(function (item) {
      traverse(mods, item);
    });
  } else {
    if (typeof config === 'object') {
      object.keys(config).forEach(function (key) {
        config[key] && mods.push(key);
      });
    }
  }
}

function bem(name, config) {
  var mods = [];
  traverse(mods, config);
  var ret = join(name, mods);
  return ret;
}

module.exports = bem;
