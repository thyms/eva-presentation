(function() {
  var app, controllers;

  app = angular.module('admin-app', ['ngResource']);

  app.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      return $routeProvider.when("/status/:section", {
        templateUrl: "/partials/admin_status",
        controller: "StatusController"
      }).when("/status", {
        templateUrl: "/partials/admin_status",
        controller: "StatusController"
      }).otherwise({
        redirecTo: "/status"
      });
    }
  ]);

  app.factory('Status', [
    '$resource', function($resource) {
      return $resource('/api/1/status/:section');
    }
  ]);

  controllers = {
    StatusController: function($scope, $routeParams, Status) {
      return $scope.params = Status.get({
        section: $routeParams.section
      });
    }
  };

  app.controller("StatusController", controllers.StatusController);

}).call(this);
