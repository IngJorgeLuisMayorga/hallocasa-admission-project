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
    , require('../login/login')
    , require('../notfound/notfound')
    , require('../../directives/shakeThat')
    , require('../../directives/geoplace')
    , require('../../routes/home/home')
    , require('../../routes/about/about')
    , require('../../routes/admin/admin')
    , require('../../routes/showlocation/showlocation')
    , require('../../routes/manage/manage')
    , require('../../services/account')
    , require('../../services/auth')
    , require('../../services/ui')
    , require('../../services/cache')
    , require('../../filters/percentage')
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

      , { path: '/about', component: 'about', name: 'About' }
      , { path: '/admin/...', component: 'admin', name: 'Admin' }
      , { path: '/**', component: 'notfound', name: 'NotFound' }

    ]
  })

