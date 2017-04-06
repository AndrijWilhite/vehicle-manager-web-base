(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', 'customersFactory', 'vehicleFactory', '$stateParams'];

    /* @ngInject */
    function SalesDetailController(salesFactory, customersFactory,vehicleFactory, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        customersFactory
          .getAll()
          .then(function(customers){
            vm.customers = customers;
          });

          vehicleFactory
          .getAll()
          .then(function(vehicles){
            vm.vehicles = vehicles;
          });

        function activate() {
          var saleId = $stateParams.id;

          salesFactory
          .getById(saleId)
          .then(function(sales){
            vm.sales = sales;
          })
          .catch(function(error){
            alert(error)

          });
        }

        function save(){
          salesFactory
          .update(vm.sales.saleID, vm.sales)
          .then(function(){
            alert('sale updated');
          })
        }
        }
        })();
