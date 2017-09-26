/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//'use strict';
  
//  $.ajaxSetup ({
//            cache: false,
//            headers: { "cache-control": "no-cache" }
//        });
        
hrApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
            // Home page dashboard ========================================
            .state('home', {
                cache: false,
                url: '/home',
                templateUrl: 'fragments/dashboard.html',
                controller: 'dashboardController'
            })

            // Details View for Person ========================================
            .state('person', {
                cache: false,
                url: '/person',
                templateUrl: 'fragments/person.html',
                controller: 'personController'
            })
 

            // Details View for Group ========================================
            .state('group', {
                cache: false,
                url: '/group',
                templateUrl: 'fragments/group.html',
                controller: 'groupController'
            }) 
            
   });