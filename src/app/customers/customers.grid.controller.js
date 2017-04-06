(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController );

    CustomersGridController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomersGridController (customersFactory, $stateParams) {
        var vm = this;

       vm.byebye =  function(customer){
         customersFactory
            .remove(customer.customerID)
            .then(function(response) {
            vm.customers.splice(vm.customers.indexOf(customer), 1);
          });
       }

        activate();

        function activate() {
          customersFactory
          .getAll()
          .then(function(data){
            vm.customers = data;
            console.log(data);

          });
          }
          }
        })();
