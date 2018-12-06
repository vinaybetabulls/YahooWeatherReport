

var YahooWeather = angular
    .module('weather', [
        'ui.router'
    ]);

YahooWeather.config(['$stateProvider', '$urlRouterProvider', '$qProvider', function ($stateProvider, $urlRouterProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller : 'YahooController'
        })
}])

