var constructor, moduleName = 'app.manage'

angular.module(moduleName, []).component('manage', {
    templateUrl: 'routes/manage/manage.html',
    controllerAs: 'vm',
    controller: (constructor = ['$http' ,'$rootScope', ManageController])
  })


function ManageController($http,$rootScope) {

  var vm = this

  vm.currentUser = null
  vm.locationList = [
    'Museo del oro',
    'Cll 82 Cr 16',
    'Parque de la 9',
    'cr 30 #82',
    'Aeropuerto el dorado'
  ];
  vm.searchText = [
    '','','','',''
  ];
  vm.latLonList = [{},{},{},{},{}]


  vm.STORAGE = []

  vm.getPlace = function(placeString){

    let geoKey= 'AIzaSyBI3OF3xdC2ojKn_H4T-rbtEebjA4nUj3A';
    let geoPlace = encodeURIComponent(placeString + ' bogota' );
    let geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+geoPlace+'&key='+geoKey;

    return new Promise((resolve) => {
      try{
      $http.get(geoURL)
        .then(function(response) {
              resolve(response);
        }).catch(function(){console.log("Error getting http response")});
      }catch(e){
        console.error('Error en http get Lat Lon')
      }
    });

  }


  vm.$routerOnActivate = async function (/*toRoute , fromRoute */) {

    for(let k = 0; k < vm.locationList.length; k++){
      vm.getPlace(vm.locationList[k]).then( response => {
        let place = response['data']['results'];
        vm.latLonList[k] = place[0].geometry.location;;

        let placeObj = {
          id : k,
          name : vm.locationList[k],
          search : '',
          address : place[0].formatted_address,
          position : {
            lat : place[0].geometry.location.lat,
            lng : place[0].geometry.location.lng
          }
        };
        vm.STORAGE[k] = placeObj;
        $rootScope.gSTORAGE = vm.STORAGE;

      });

    }

  };

  vm.querySearch = async function(query,key) {
    //var results = vm.locationList.filter( location => { return parseFloat(vm.similarity(location,query)) > 0.5 });
    let placesObj = await vm.getPlace(query);
    let placesResults = placesObj.data.results;
    let placesLatLon = placesResults[0].geometry.location;

    vm.STORAGE[key].lat = placesLatLon.lat;
    vm.STORAGE[key].lng = placesLatLon.lng;

    $rootScope.gSTORAGE = vm.STORAGE;

    console.log(placesObj)
    return placesResults;
  }



vm.similarity = function(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (longerLength - vm.editDistance(longer, shorter)) / parseFloat(longerLength);
}
vm.editDistance = function(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = [];
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i === 0){costs[j] = j;}

      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
          {
            newValue = Math.min(Math.min(newValue, lastValue),costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0){
      costs[s2.length] = lastValue;
    }

  }
  return costs[s2.length];
}








}

module.exports = moduleName
