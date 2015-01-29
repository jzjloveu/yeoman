'use strict';

/**
 * @ngdoc function
 * @name dododoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dododoApp
 */
angular.module('dododoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
