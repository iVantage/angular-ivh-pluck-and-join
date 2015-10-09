
/**
 * The pluck and join filter
 *
 * @package ivh.pluckAndJoin
 * @copyright 2015 iVantage Health Analytics, Inc.
 */

angular.module('ivh.pluckAndJoin')
  .filter('ivhPluckAndJoin', function() {
    'use strict';

    var map = Array.prototype.map || function(fn) {
      var mapped = [];
      angular.forEach(this, function(item) {
        mapped.push(fn(item));
      });
      return mapped;
    };

    var plucker = function(prop) {
      return function(item) {
        return item[prop];
      };
    };

    return function(col, prop, delim) {
      delim = delim || ', ';
      return map.call(col, plucker(prop)).join(delim);
    };
  });
