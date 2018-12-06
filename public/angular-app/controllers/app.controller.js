/**
 * @ngdoc
 * @name YahooController
 * @function weatherCtrlFun
 * @argument address
 * @description this controller take address compoent and call the WeatherService 
 * @author vinay
 * #YahooController
 * #22-Aug-2018
 */

(function () {
    'use strict';

    YahooWeather.controller('YahooController', YahooController);

    YahooController.$inject = ['$rootScope','$scope', 'WeatherService'];
    function YahooController($rootScope,$scope, WeatherService) {
        $scope.weatherCtrlFun = function (address) {
            let city = address[0].short_name;
            let state = address[1].short_name;
            let country = address[2].short_name;
            WeatherService.getWeather(city, state, country)
                .then(function (response) {
                    console.log(response);
                    $scope.resultsuccess = true;
                    $scope.windspeed = response.data.result.query.results.channel.wind.speed;
                    $scope.humidity = response.data.result.query.results.channel.atmosphere.humidity;
                    $scope.sunrise = response.data.result.query.results.channel.astronomy.sunrise;
                    $scope.sunset = response.data.result.query.results.channel.astronomy.sunset;
                    $scope.forecast = response.data.result.query.results.channel.item.forecast;
                    $scope.condition = response.data.result.query.results.channel.item.condition;
                    console.log($scope.windspeed)
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }
})();