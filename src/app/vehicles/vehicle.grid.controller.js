(function() {
    'use strict';

    angular
        .module('app.vehicle')
        .controller('VehicleGridController', VehicleGridController );

    VehicleGridController.$inject = ['vehicleFactory'];

    /* @ngInject */
    function VehicleGridController (vehicleFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
