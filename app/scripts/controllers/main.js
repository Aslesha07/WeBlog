'use strict';

/**
 * @ngdoc function
 * @name weblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weblogApp
 */
angular.module('weblogApp')
  .controller('MainCtrl', [ $scope, 'RequestService', function ($scope, RequestService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.posts = RequestService.getAllPosts();



  }]);
