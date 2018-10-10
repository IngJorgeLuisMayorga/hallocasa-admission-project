var constructor, moduleName = 'app.showlocation'

angular.module(moduleName, []).component('showlocation', {
    templateUrl: 'routes/showlocation/showlocation.html',
    controllerAs: 'vm',
    controller: (constructor = ['Account', showlocationController])
  })

constructor.$canActivate = ['Account', function(Account) {
  return Account.loginStatusForNavigation() || true
}]

function showlocationController(Account) {
  var vm = this

  vm.currentUser = null

  vm.$routerOnActivate = function (/*toRoute , fromRoute */) {
    //vm.name = toRoute.params.name
    Account.getCachedUser().then(function(user) {
      vm.currentUser = user
    })
  }
}

module.exports = moduleName
