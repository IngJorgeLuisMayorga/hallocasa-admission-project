var angular = require('angular')

angular.module('ngApp', [
      require('ngComponentRouter')
    , require('ngmap')
    , require('angular-cookies')
    , require('angular-animate')
    , require('angular-messages')
    , require('angular-resource')
    , require('angular-material-data-table')
    , require('angular-material')
    , require('../navbar/navbar')
    , require('../sidenav/sidenav')
    , require('../notfound/notfound')
    , require('../../directives/geoplace')
    , require('../../routes/home/home')
    , require('../../routes/showlocation/showlocation')
    , require('../../routes/manage/manage')
    , require('../../services/account')
    , require('../../services/auth')
    , require('../../services/ui')
    , require('../../services/cache')
    , require('../../../scratch/templates')
    ])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('fonts/materialdesignicons-webfont.svg')
      .defaultFontSet('mdi')
  }])
  .run(['$templateRequest','NgMap','$rootScope', function($templateRequest,NgMap,$rootScope){
    var urls = ['fonts/materialdesignicons-webfont.svg']

    angular.forEach(urls, function(url) {
      $templateRequest(url)
    })



  }])
  .value('$routerRootComponent', 'app')
  .component('app', {
    templateUrl: 'components/app/app.html',
    $routeConfig: [

        { path: '/', component: 'home', name: 'Home' }

      , { path: '/manage', component: 'manage', name: 'Manage' }
      , { path: '/show', component: 'showlocation', name: 'Show' }

      , { path: '/**', component: 'notfound', name: 'NotFound' }

    ]
  })

