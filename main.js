require.config({
	baseUrl: "",
    paths: {
    //'angular': 'js/angular.min',
    'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.21/angular.min',
    'angular-animate': 'js/angular-animate.min',
    'angular-resource': 'js/angular-resource.min',
    'angular-route': 'js/angular-route.min',
    'angularAMD': 'js/angularAMD.min',
	'CombiMinScripts': 'http://cdn.jsdelivr.net/g/jquery@2.1.1,modernizr@2.6.2,jquery.validation@1.13.1,bootstrap@3.0.0,jquery.ui@1.10.3#',
	'toaster': 'js/toaster',
	'loading-bar': 'js/loading-bar',
    'descargar': 'js/dependencyResolverFor',
    'ngTable': 'js/ng-table.min'
    },
    shim: {
	    'CombiMinScripts': {
            exports: ['CombiMinScripts']
        },
        'angular': {
            exports: 'angular',
            deps: ['CombiMinScripts']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angularAMD': {
            deps: ['angular']
        },
		'toaster': {
            exports: 'toaster',
            deps: ['angular-animate']
        },
        'loading-bar': {
            exports: 'loading-bar',
            deps: ['angular']
        }
    },
    deps: [
        'app/app'
    ]
});
