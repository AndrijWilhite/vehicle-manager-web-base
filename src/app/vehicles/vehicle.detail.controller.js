(function() {
    'use strict';

    angular
        .module('app.vehicle')
        .controller('VehicleDetailController', VehicleDetailController);

    VehicleDetailController.$inject = ['vehicleFactory', '$stateParams'];

    /* @ngInject */
    function VehicleDetailController(vehicleFactory, $stateParams) {
      var vm = this;

      vm.save = save;

      activate();

      function activate() {
        var vehicleId = $stateParams.id;

        vehicleFactory
        .getById(vehicleId)
        .then(function(vehicles){
          vm.vehicles = vehicles;
        })
        .catch(function(error){
          alert(error)

        });
      }

      function save(){
        vehicleFactory
        .update(vm.vehicles.vehicleID, vm.vehicles)
        .then(function(){
          alert('vehicle updated');
        })
      }
  }
})();
