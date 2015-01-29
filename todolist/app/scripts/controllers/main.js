'use strict';

/**
 * @ngdoc function
 * @name dododoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dododoApp
 */
angular.module('dododoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
