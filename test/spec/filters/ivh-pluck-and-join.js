
describe('Filter: ivhPluckAndJoin', function() {
  'use strict';

  beforeEach(module('ivh.pluckAndJoin'));

  var ivhPluckAndJoinFilter, items;

  beforeEach(inject(function(_ivhPluckAndJoinFilter_) {
    ivhPluckAndJoinFilter = _ivhPluckAndJoinFilter_;
    items = [{name: 'Justin'}, {name: 'Bella'}];
  }));

  it('should return the empty string for empty collections', function() {
    var actual = ivhPluckAndJoinFilter([], 'name');
    expect(actual).toBe('');
  });

  it('should join items by ", " by default', function() {
    var actual = ivhPluckAndJoinFilter(items, 'name');
    expect(actual).toBe('Justin, Bella');
  });

  it('should accept a custom delimiter', function() {
    var actual = ivhPluckAndJoinFilter(items, 'name', ' - ');
    expect(actual).toBe('Justin - Bella');
  });
});