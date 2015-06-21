define(['angularAMD'], function (controllers) {
    'use strict';
    controllers.controller('coloresIndexController', [
        '$scope','Data','ngTableParams','$filter','$location', function ($scope,Data,ngTableParams,$filter,$location) {
          $scope.data=[];
               Data.get('colores').then(function (results) {
                  if (results.status=="success") {
                  		$scope.data=results.colores;
                      $scope.tableParams.reload();
                  } else {
                  		Data.toast(results.message);
                  }
              });

            $scope.nuevoColor=function()
            {
              $location.path('colores/nuevo');
            }

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