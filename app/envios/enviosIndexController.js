define(['angularAMD'], function (controllers) {
    'use strict';
    controllers.controller('enviosIndexController', [
        '$scope','Data','ngTableParams','$filter', function ($scope,Data,ngTableParams,$filter) {
          $scope.data=[];
               Data.get('envios').then(function (results) {
                  if (results.status=="success") {
                  		$scope.data=results.envios;
                      $scope.tableParams.reload();
                  } else {
                  		Data.toast(results.message);
                  }
              });


            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10,
                sorting: {
                    Id: 'asc'     // initial sorting
                  }           // count per page
            }, {
                total: $scope.data.length, // length of data
                getData: function($defer, params) {
                      
                var orderedData = params.sorting() ?
                    $filter('orderBy')($scope.data, params.orderBy()) :
                    $scope.data;


                    orderedData= params.filter() ?
                      $filter('filter')($scope.data, params.filter()) :
                      $scope.data;
                    params.total(orderedData.length);

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
        }
    ]);
});