/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('tables', []).directive('topItemsTable', function () {
    return {
        scope: {
            entity: "@",
            data: "=",
            list: "@",
            tab: "="
        },
        templateUrl: 'templates/topItemTable.html'
    };
});
