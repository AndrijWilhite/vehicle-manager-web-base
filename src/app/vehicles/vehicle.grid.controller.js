(function() {
    'use strict';

    angular
        .module('app.vehicle')
        .controller('VehicleGridController', VehicleGridController );

    VehicleGridController.$inject = ['vehicleFactory', '$stateParams'];

    /* @ngInject */
    function VehicleGridController (vehicleFactory, $stateParams) {
        var vm = this;

       vm.byebye =  function(vehicle){
         vehicleFactory
            .remove(vehicle.vehicleID)
            .then(function(response) {
            vm.vehicles.splice(vm.vehicles.indexOf(vehicle), 1);
          });
       }

        activate();

        function activate() {
          vehicleFactory
          .getAll()
          .then(function(data){
            vm.vehicles = data;
            console.log(data);

          });
          }
          }
        })();
