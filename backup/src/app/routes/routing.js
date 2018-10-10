export  function appRoutes($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<h1>HOME</h1>"
    })
    .when("/manageLocations", {
        template : "<app-show-locations></app-show-locations>"
    })
    .when("/showLocations", {
        template : "<app-show-locations></app-show-locations>"
    })
  }
