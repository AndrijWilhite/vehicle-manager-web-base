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
                .get(apiUrl+'vehicles/'+ id)
                .then(function(response){
                  return response.data;

                });
          }
          function update(id, vehicles){
                return $http.put(apiUrl+'vehicles/' + id, vehicles);
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
            .delete(apiUrl +'vehicles/' + id)
            .then(function(response){
              return response.data;
            });
          }
        }

})();
