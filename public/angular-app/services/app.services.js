/**
 * @ngdoc
 * @name WeatherService
 * @function getWeather
 * @argument city,state and country
 * @description this service to access the node api to get the weather report of given arguments
 * @author vinay
 * #WeatherService
 * #date 22-Aug-2018
 */

(function() {
    'use strict';

        YahooWeather.factory('WeatherService', WeatherService);

        WeatherService.$inject = ['$http'];
    function WeatherService($http) {
        var service = {
            getWeather:getWeather
        };
        
        return service;

        ////////////////
        function getWeather(city,state,country) {
            let address ={
                city : city,
                state : state,
                country : country
            }
            return $http.post('http://localhost:4500/api/yahoo/getWeather/',address)
         }
    }
})();