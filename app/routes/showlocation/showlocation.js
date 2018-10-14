var constructor, moduleName = 'app.showlocation'

angular.module(moduleName, []).component('showlocation', {
    templateUrl: 'routes/showlocation/showlocation.html',
    controllerAs: 'vm',
    controller: (constructor = ['Account','NgMap','$scope' , '$rootScope', showlocationController])
  })




function showlocationController(Account,NgMap,$scope,$rootScope) {




  var vm = this;

  vm.STORAGE = $rootScope.gSTORAGE;
vm.locationFrom = 'Aeropuerto el Dorado, Bogotá Colombia';
vm.locationTo = 'Universidad Nacional, Bogotá Colombia';

  vm.$routerOnActivate = function (/*toRoute , fromRoute */) {
    vm.showSTORAGE = $rootScope.gSTORAGE;
  }

  vm.getPosition = function(item){
    return [item.position.lat , item.position.lng];
  }
}

module.exports = moduleName
