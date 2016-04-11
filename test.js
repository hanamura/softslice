var expect = require('chai').expect;
var range  = require('lodash.range');

var softSlice = require('./index');

describe('softslice', function() {

  it('should slice items with given index as base point', function() {
    expect(softSlice(range(10), 4, 7)).to.eql([1, 2, 3, 4, 5, 6, 7]);
    expect(softSlice(range(10), 4, 7, false)).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should slice items with given index and left edge as base points', function() {
    expect(softSlice(range(10), 2, 7)).to.eql([0, 1, 2, 3, 4, 5, 6]);
    expect(softSlice(range(10), 2, 7, false)).to.eql([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should slice items with given index and right edge as base points', function() {
    expect(softSlice(range(10), 7, 7)).to.eql([3, 4, 5, 6, 7, 8, 9]);
    expect(softSlice(range(10), 7, 7, false)).to.eql([3, 4, 5, 6, 7, 8, 9]);
  });

  it('should slice items with given index, left edge, and right edge as base points', function() {
    expect(softSlice(range(10), 4, 20)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(softSlice(range(10), 4, 20, false)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should normalize negative out-of-range index', function() {
    expect(softSlice(range(10), -5, 7)).to.eql([0, 1, 2, 3, 4, 5, 6]);
    expect(softSlice(range(10), -5, 7, false)).to.eql([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should normalize positive out-of-range index', function() {
    expect(softSlice(range(10), 15, 7)).to.eql([3, 4, 5, 6, 7, 8, 9]);
    expect(softSlice(range(10), 15, 7, false)).to.eql([3, 4, 5, 6, 7, 8, 9]);
  });

  it('should slice empty items with zero length', function() {
    expect(softSlice(range(10), 4, 0)).to.eql([]);
    expect(softSlice(range(10), 4, 0, false)).to.eql([]);
  });

  it('should slice empty items with negative length', function() {
    expect(softSlice(range(10), 4, -5)).to.eql([]);
    expect(softSlice(range(10), 4, -5, false)).to.eql([]);
  });

  it('should slice empty items with empty array', function() {
    expect(softSlice([], 0, 10)).to.eql([]);
    expect(softSlice([], 0, 10, false)).to.eql([]);
  });

  it('should slice items dealing with left side as priority', function() {
    expect(softSlice(range(10), 4, 6)).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should slice items dealing with right side as priority', function() {
    expect(softSlice(range(10), 4, 6, false)).to.eql([2, 3, 4, 5, 6, 7]);
  });

});
