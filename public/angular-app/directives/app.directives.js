/**
 * @ngdoc
 * @name googleplaceAutocomplete
 * @description this directive for to get the city , state and country from google automcomplete
 * @author vinay
 * #YahooWeather.googleplaecAutocomplete
 * #date 22-Aug-2018
 * 
 */

YahooWeather.directive('googleplaceAutocomplete', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        googleplaceAutocompletePlace: '=?',
        googleplaceAutocomplete: '=',
        callbackFn: '&'
      },
      link: function postLink(scope, element, attrs, model) {
        var options = scope.googleplaceAutocomplete;
        var autocomplete = new google.maps.places.Autocomplete(element[0], options);

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
          scope.$apply(function () {
            scope.googleplaceAutocompletePlace = autocomplete.getPlace();
            model.$setViewValue(element.val());
            var city  = scope.googleplaceAutocompletePlace.address_components;
            
            scope.address={
                'city':city
            }
            console.log(scope.address)
            scope.callbackFn(scope.address);
          });
        });

        scope.$on('$destroy', function () {
          google.maps.event.clearInstanceListeners(element[0]);
        });
      }
    };
  });