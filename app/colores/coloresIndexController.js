define(['angularAMD'], function (controllers) {
    'use strict';
    controllers.controller('coloresIndexController', [
        '$scope','Data', function ($scope,Data) {
               Data.get('colores').then(function (results) {
                  if (results.status=="success") {
                  		$scope.Colores=results.colores;
                  } else {
                  		Data.toast(results.message);
                  }
              });
        }
    ]);
});