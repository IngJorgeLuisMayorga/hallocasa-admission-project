var moduleName = 'app.shakeThat'
angular.module(moduleName, [])
.directive('googleplace', function() {
  return {
      require: 'ngModel',
      link: function(scope, element, attrs, model) {
          var options = {
              types: [],
              componentRestrictions: {}
          };
          scope.gPlace = new window.google.maps.places.Autocomplete(element[0], options);

          window.google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
              scope.$apply(function() {
                  model.$setViewValue(element.val());
              });
          });
      }
  };
});


module.exports = moduleName