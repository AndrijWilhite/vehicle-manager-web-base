(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController );

    CustomersGridController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomersGridController (customersFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {
          customersFactory
          .getAll($stateParams)
          .then(function(customers){
            vm.customers = customers;

          });
          }
          }
          })();
