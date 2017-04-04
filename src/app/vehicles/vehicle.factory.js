(function() {
    'use strict';

    angular
        .module('app.vehicle')
        .factory('vehicleFactory', vehicleFactory);

    vehicleFactory.$inject = ['$http','apiUrl'];

    /* @ngInject */
    function vehicleFactory($http,apiUrl) {
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
              .get(apiUrl + 'vehicles')
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
          function update(id, vehicle){
                return $http.put(apiUrl + id, 'vehicles');
          }
          function create(vehicle){
            return $http
                .post(apiUrl, 'vehicles')
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
