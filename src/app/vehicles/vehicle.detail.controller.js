(function() {
    'use strict';

    angular
        .module('app.vehicle')
        .controller('VehicleDetailController', VehicleDetailController);

    VehicleDetailController.$inject = ['vehicleFactory', '$stateParams'];

    /* @ngInject */
    function VehicleDetailController(vehicleFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {
          vehicleFactory
          .getByid($stateParams.id)
          .then(function(vehicles){
            vm.vehicle = vehicles;

          });
        }
    }
})();
