(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController );

    SalesGridController.$inject = ['salesFactory'];

    /* @ngInject */
    function SalesGridController (salesFactory) {
        var vm = this;

        vm.byebye =  function(sale){
          salesFactory
             .remove(sale.saleID)
             .then(function(response) {
             vm.sales.splice(vm.sales.indexOf(sale), 1);
           });
        }

         activate();
        
         function activate() {
           salesFactory
           .getAll()
           .then(function(data){
             vm.sales = data;
             console.log(data);

           });
           }
           }
         })();
