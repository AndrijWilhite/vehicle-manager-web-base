(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.select',
            'ngSanitize',
            'app.customers',
            'app.dashboard',
            'app.vehicle',
            'app.sales'
        ])
        .value('apiUrl', 'https://aw-vehicle-api.azurewebsites.net/api/')
        .config(function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('/dashboard');

        //dash
          $stateProvider
            .state('dashboard',{
            url:'/dashboard',
            controller: 'DashboardController as dashboardCtrl',
            templateUrl:'app/dashboard/dashboard.html'
          })

          //customers

            .state('customers', {
              url: '/customers',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('customers.grid', {
              url: '/grid',
              controller: 'CustomersGridController as customerGridCtrl',
              templateUrl: 'app/customers/customers.grid.html'
            })
            .state('customers.detail', {
              url: '/detail?id',
              controller: 'CustomerDetailController as customerDetailCtrl',
              templateUrl: 'app/customers/customers.detail.html'
            })

            //vehicle

            .state('vehicles', {
              url: '/vehicles',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('vehicles.grid', {
              url: '/grid',
              controller: 'VehicleGridController as vehicleGridCtrl',
              templateUrl: 'app/vehicles/vehicle.grid.html'
            })
            .state('vehicles.detail', {
              url: '/detail?id',
              controller: 'VehicleDetailController as vehicleDetailCtrl',
              templateUrl: 'app/vehicles/vehicle.detail.html'
            })

            //sales

            .state('sales', {
              url: '/sales',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('sales.grid', {
              url: '/grid',
              controller: 'SalesGridController as salesGridCtrl',
              templateUrl: 'app/sales/sales.grid.html'
            })
            .state('sales.detail', {
              url: '/detail?id',
              controller: 'SalesDetailController as salesDetailCtrl',
              templateUrl: 'app/sales/sales.detail.html'
            })
        });
})();
