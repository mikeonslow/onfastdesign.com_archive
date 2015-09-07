'use strict';

angular.module('onfastdesigncomApp')
  .controller('PortfolioCtrl', function ($scope, $http) {
    $scope.linkedin_recommendations = [];

    $http.get('/api/linkedin/recommendations').success(function(recommendations) {
      $scope.linkedin_recommendations = recommendations;
    });
  });
