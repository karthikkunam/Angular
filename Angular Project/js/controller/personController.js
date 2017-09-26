 (function() {
    'use strict'; 
    hrApp.controller('personController', function ($scope, $http) {
        $http.get('rest/ws/person/8986').then(function(response) {
            $scope.Employee = response.data;
        });
        $http.get('rest/ws/org/21153').then(function(response) {
            $scope.Org = response.data;
        });
        $scope.guageOptions = {
            chart: {
                type: 'pieChart',
                height: 350,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
                showLegend: false,
                growOnHover: false,
                tooltip: {
                    enable: false,
                    hidden: true
                },
                
                title: '22%',
                titleOffset: -12,

                color: ['green', 'lightgray'],
                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
            }
        };

        $scope.guageData = [
            {
                key: "Risk Of Leaving",
                y: 22
            },
            {
                key: "",
                y: 78
            }
        ];
        
        $scope.changeRisk = function(newValue) {
            $scope.guageData[0].y=newValue;
            $scope.guageData[1].y=100-newValue;
            $scope.guageOptions.chart.title = newValue + "%";
            $scope.guageOptions.chart.color[0] = $scope.getRiskColor(newValue);
            $scope.guageOptions.chart.title = newValue + "%";
        }
        
        $scope.getRiskColor = function(riskFactor) {
            if (riskFactor > 66) return 'red';
            if (riskFactor > 33) return 'yellow';
            return 'green';
        }
        
        $scope.changeRisk(54);
    
        $scope.getPersonLink = function(person) {
            return "<a>" + person.name + "</a>";
        } 
        
        $scope.getSpacer = function(num) {
            var spacer = 0;
            for (var i=0; i<num-1; i++) {
                spacer = spacer + 10;
            }   
            return spacer;
        }
    });
})();