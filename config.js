(function(){
    'use strict';
    
angular
    .module('officetrans')
    .config(config);

    function config($stateProvider, $urlRouterProvider){
        
            $urlRouterProvider.otherwise("login");
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/home/home.view.html',
                    controller : 'homeCtrl as vmt'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/login/login.view.html',
                    controller : 'loginCtrl as vm'
                })
    }

})();
