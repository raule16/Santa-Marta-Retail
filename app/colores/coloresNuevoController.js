define(['angularAMD'], function (controllers) {
    'use strict';
    controllers.controller('coloresNuevoController', [
        '$scope', 'Data', '$location', 'toaster', '$route', function ($scope, Data, $location, toaster, $route) {
            $scope.volver = function () {
                $location.path('/sm/colores');
            }

            $scope.crearColor = function (isValid) {
                if (!isValid) {
                    toaster.pop('error', "Datos no validos");
                } else {

                    var color = {
                        nombre: $scope.Nombre,
                        colorfs:$scope.ColorFS,
                        colordescriptivo: $scope.colorDescriptivo
                    }

                    Data.post('colores/nuevo', {
                        color: color
                    }).then(function (results) {
                        Data.toast(results);
                        if (results.status == "success") {
                            $route.reload();
                        }
                    });
                }
            }
        }
    ]);
});