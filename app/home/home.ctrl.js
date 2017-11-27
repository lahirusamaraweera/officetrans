(function(){
    
        'use strict';
    
        angular.module('officetrans')
                .controller('homeCtrl', homeCtrl);
    
        function homeCtrl($scope,$rootScope,ngToast,loginService){

            var vm = this;
            vm.login = 1;

            vm.login = function(){
                loginService.authorize('lahiru','tewd');
                console.log(1);
            }

            vm.logout = function(){
                loginService.logout();
                console.log(0);
            }
            
            vm.username = loginService.getuser();

            
            
            
        }
    
})();