(function(){
    'use strict';
    
angular
    .module('officetrans')
    .config(config);

    function config($stateProvider, $urlRouterProvider){
        
            $urlRouterProvider.otherwise("");
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/login/login.view.html',
                    controller : 'login as vm'
                })
    }

})();
