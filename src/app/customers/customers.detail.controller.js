(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomerDetailController(customersFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {
          customersFactory
          .getById($stateParams.id)
          .then(function(customers){
            vm.customers = customers;

          });
        }
    }
})();
