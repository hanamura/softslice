module.exports = function(totalLength, index, sliceLength, leftPrioritized) {
  leftPrioritized = (leftPrioritized === undefined) ? true : leftPrioritized;

  var start, end;

  if (leftPrioritized) {
    start = index - sliceLength / 2;
    start = Math.ceil(start);
    start = Math.min(start, totalLength - sliceLength);
    start = Math.max(start, 0);
    end   = start + sliceLength;
    end   = Math.min(end, totalLength);
  } else {
    end   = index + sliceLength / 2 + 1;
    end   = Math.floor(end);
    end   = Math.max(end, sliceLength);
    end   = Math.min(end, totalLength);
    start = end - sliceLength;
    start = Math.max(start, 0);
  }

  return [start, end];
};
