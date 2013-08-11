app = angular.module('admin-app', ['ngResource'])
app.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider
    .when("/status/:section",
      templateUrl: "/partials/admin_status"
      controller: "StatusController")
    .when("/status",
      templateUrl: "/partials/admin_status"
      controller: "StatusController")
    .otherwise redirecTo: "/status"

#  $locationProvider.html5Mode(true)
]

app.factory 'Status', ['$resource', ($resource) ->
  $resource '/api/1/status/:section'
]

controllers =
  StatusController: ($scope, $routeParams, Status) ->
    $scope.params = Status.get(section: $routeParams.section)

app.controller("StatusController", controllers.StatusController)
