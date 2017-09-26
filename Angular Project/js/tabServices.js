/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('tabs').service('TabInfo', function(){
        this.tabName = "dashboard";
        this.itemId = "";
        this.itemType = "person";
        
        showDetails = function(type, id) {
            this.tabName = "details";
            this.itemType = type;
            this.itemId = id;
        }
        
        showDashboard = function() {
            this.tabName = "dashboard";
        }
    }
);