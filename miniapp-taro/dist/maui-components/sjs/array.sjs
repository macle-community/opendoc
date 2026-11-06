function isArray(array) {
  return array && (array instanceof Array || array.constructor === 'Array');
}

module.exports.isArray = isArray;
