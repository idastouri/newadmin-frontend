import underscore from 'underscore';

const _ = angular.module('underscore', []);

_.constant('_', function($window) {
  return $window._;
});

_.$inject = ['$window'];
