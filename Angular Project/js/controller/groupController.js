 (function() {
    'use strict'; 
    hrApp.controller('groupController', function ($scope, $http) {
        $http.get('rest/ws/group/8986').then(function(response) {
            $scope.Group = response.data;
        });
    });
})();