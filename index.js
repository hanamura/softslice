var indexes = require('./indexes');

module.exports = function(array, index, sliceLength, leftPrioritized) {
  var result = indexes(array.length, index, sliceLength, leftPrioritized);

  return array.slice(result[0], result[1]);
};
