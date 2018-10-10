/**
 *  ------------------------------------------------------------
 *  -- AngularJS App Bootstrap                                --
 *  ------------------------------------------------------------
 */



 // --------------------------------------------------------- //
 // -- imports ---------------------------------------------- //
 // --------------------------------------------------------- //

    // Angular Resources
    import angular from 'angular';

    // Angular Settings
    import {appRoutes} from './routes/routing';

    // Import Components
    import {sharedHeaderComponent} from './shared/header/sharedHeader.component';
    import {sharedFooterComponent} from './shared/footer/sharedFooter.component';
    import {sharedMenuComponent} from './shared/menu/sharedMenu.component';

    import {viewManageLocationsComponent} from './views/manageLocations/manageLocations.component';
    import {viewShowLocationsComponent} from './views/showLocations/showLocations.component';
 // --------------------------------------------------------- //



 // --------------------------------------------------------- //
 // --App's Parameters -------------------------------------- //
 // --------------------------------------------------------- //
    const MODULE_NAME = 'app';
    const MODULE_INJECTIONS = ['ngRoute','ngMaterial', 'ngMessages','ngMap'];
 // --------------------------------------------------------- //




let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};



angular.module(MODULE_NAME, MODULE_INJECTIONS)

  .directive('app', app)





  .directive('sharedHeader',function(){ return sharedHeaderComponent()})
  .directive('sharedFooter',function(){ return sharedFooterComponent()})
  .directive('sharedMenu',function(){ return sharedMenuComponent()})

  .directive('viewManageLocation',function(){ return viewManageLocationsComponent()})
  .directive('viewShowLocation',function(){ return viewShowLocationsComponent()})

  .directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: './shared/menu/menu.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  })




  .controller('AppCtrl', function($scope, $route, $routeParams, $location, NgMap) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.url  = 'https://github.com/preboot/angular-webpack';

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

  })

  .config(function($routeProvider){appRoutes($routeProvider)})


export default MODULE_NAME;
