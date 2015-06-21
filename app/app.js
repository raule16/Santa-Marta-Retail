define(['angularAMD','descargar', 'angular-route','angular-animate','toaster',
  'app/services/services.index','ngTable','loading-bar','colorpicker'], function (angularAMD,descargar) {
  var app = angular.module('sm', ['ngRoute', 'ngAnimate', 'toaster','sm.services','ngTable','angular-loading-bar','colorpicker.module']);
  app.config(['cfpLoadingBarProvider','$httpProvider','$routeProvider','$locationProvider',
    function (cfpLoadingBarProvider,$httpProvider,$routeProvider,$locationProvider) {

        cfpLoadingBarProvider.includeSpinner = true;

          $routeProvider.
          when('/', angularAMD.route({
            templateUrl: 'app/home/index.html', 
            controller:'homeIndexController',
            controllerUrl: 'app/home/homeIndexController',
            resolve: descargar('home')
           
          }))
          .when('/login', angularAMD.route({
            templateUrl: 'app/login/login.html', 
            controller: "authCtrl",
            controllerUrl: 'app/login/authCtrl',
            resolve: descargar('login')
          }))
          . when('/tablasBase', angularAMD.route({
            templateUrl: 'app/tablasBase/index.html', 
            controller: "tablasBaseIndexController",
            controllerUrl: 'app/tablasBase/tablasBaseIndexController',
            resolve: descargar('tablasBase')
          }))
          . when('/colores', angularAMD.route({
            templateUrl: 'app/colores/index.html', 
            controller: "coloresIndexController",
            controllerUrl: 'app/colores/coloresIndexController',
            resolve: descargar('colores')
          }))
          . when('/envios', angularAMD.route({
            templateUrl: 'app/envios/index.html', 
            controller: "enviosIndexController",
            controllerUrl: 'app/envios/enviosIndexController',
            resolve: descargar('envios')
          }))
          .when('/colores/nuevo', angularAMD.route({
            templateUrl: 'app/colores/nuevo.html', 
            controller: "coloresNuevoController",
            controllerUrl: 'app/colores/coloresNuevoController',
            resolve: descargar('colores')
          }))
          
          /*    .when('/dashboard', {
                  title: 'Dashboard',
                  templateUrl: 'partials/dashboard.html',
                  controller: 'authCtrl'
              })

              .when('/tablasBase', {
                  title: 'Tablas Base',
                  templateUrl: 'partials/tablasBase/index.html',
                  controller: 'indexController',
                  role: '0'
              })
              .when('/login', {
                  title: 'Login',
                  templateUrl: 'partials/login.html',
                  controller: 'authCtrl',
                  role: '0'
              })*/
              .otherwise({
                  redirectTo: '/'
              });

              // use the HTML5 History API
              $locationProvider.html5Mode(true);
    }])
      .run(function ($rootScope, $location,Data) {
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
              $rootScope.authenticated = false;
              Data.get('session').then(function (results) {
                  if (results.uid) {
                      $rootScope.authenticated = true;
                      $rootScope.uid = results.uid;
                      $rootScope.name = results.name;
                      $rootScope.email = results.email;
                      //$location.path("/sm");
                  } else {
                      var nextUrl = next.$$route.originalPath;
                      if (nextUrl == '/signup' || nextUrl == '/login') {

                      } else {
                          $location.path("/sm/login");
                      }
                  }
              });
          });
      });
    return angularAMD.bootstrap(app);
});
