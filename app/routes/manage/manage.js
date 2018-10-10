var constructor, moduleName = 'app.manage'

angular.module(moduleName, []).component('manage', {
    templateUrl: 'routes/manage/manage.html',
    controllerAs: 'vm',
    controller: (constructor = ['Account', ManageController])
  })

constructor.$canActivate = ['Account', function(Account) {
  return Account.loginStatusForNavigation() || true
}]

function ManageController(Account) {
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
