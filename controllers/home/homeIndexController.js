app.controller('homeIndexController', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.tablasBase = function()
    {
      $location.path("/tablasBase");
    }
});
