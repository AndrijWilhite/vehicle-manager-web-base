(function() {
    'use strict';

    angular
        .module('app.sales')
        .factory('salesFactory', salesFactory);

    salesFactory.$inject = ['$http','apiUrl'];

    /* @ngInject */
    function salesFactory($http, apiUrl) {
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
              .get(apiUrl + 'sales')
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
          function update(id, sales){
                return $http.put(apiUrl + id, 'sales');
          }
          function create(sales){
            return $http
                .post(apiUrl, 'sales')
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
