 (function() {
    'use strict'; 
    hrApp.controller('dashboardController', function ($scope, $http) {
        $http.get('rest/ws/trend/US').then(function(response) {
            $scope.trendData = response.data;
        });
        $http.get('rest/ws/distribution').then(function(response) {
            $scope.distData = response.data;
        });
        $http.get('rest/ws/topItems/risk').then(function(response) {
            $scope.topRisk = response.data;
        });
        
        $scope.trendOptions = {
            chart: {
              "type": "lineChart",
              "height": 300,
              "margin": {
                "top": 20,
                "right": 10,
                "bottom": 40,
                "left": 90
              },
              "useInteractiveGuideline": true,
              "dispatch": {},
              "xAxis": {
                "axisLabel": "Date",
                "tickFormat": (function(d) { 
                  return d3.time.format('%x')(new Date(d)) 
                })
              },
              "yAxis": {
                "axisLabel": "Attrition Risk (%)",
                "axisLabelDistance": -10,
                "tickFormat": function (d){
                        return d3.format(".0%")(d);
                    }
              }
            }
        };
        
        $scope.distOptions = {
            chart: {
              "type": "lineChart",
              "height": 300,
              "margin": {
                "top": 20,
                "right": 10,
                "bottom": 40,
                "left": 90
              },
              "useInteractiveGuideline": true,
              "dispatch": {},
              "xAxis": {
                "axisLabel": "Probability of Leaving",
                "tickFormat": function (d){
                        return d3.format(".0%")(d);
                    }
              },
              "yAxis": {
                "axisLabel": "Count",
                "axisLabelDistance": -10,
                "tickFormat": function (d){
                        return d3.format('.01f')(d);
                    }
              }
            }
        };
    });
})();