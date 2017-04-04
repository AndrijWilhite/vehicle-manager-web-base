(function() {
    'use strict';

    angular
        .module('app.customers')
        .factory('customersFactory', customersFactory);

    customersFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function customersFactory($http, apiUrl) {
        var service = {
          getAll: getAll,
          getById: getById,
          create: create,
          remove: remove,
          update: update
        };

        return service;

        function getAll(){
          return $http
              .get(apiUrl + 'Customers')
              .then(function(response){
                return response.data;
              });
            }
          function getById(id){
            return $http
                .get(apiUrl + id)
                .then(function(response){
                  return response.data;
                });
          }
          function update(id, customer){
                return $http.put(apiUrl + id, 'Customers');
          }
          function create(customer){
            return $http
                .post(apiUrl, 'Customers')
                .then(function(response){
                  return response.data;
                });
          }
          function remove(id){
            return $http
            .delete(apiUrl + id)
            .then(function(response){
              return response.data;
            });
          }
        }

})();