(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomerDetailController(customersFactory, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function activate() {
          var customerId = $stateParams.id;

          customersFactory
          .getById(customerId)
          .then(function(customers){
            vm.customers = customers;
          })
          .catch(function(error){
            alert(error)

          });
        }

        function save(){
          customersFactory
          .update(vm.customers.customerID, vm.customers)
          .then(function(){
            alert('customer updated');
          })
        }
    }
})();
