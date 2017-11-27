(function(){
    
        'use strict';
    
        angular.module('officetrans')
                .controller('navCtrl', navCtrl);
    
        function navCtrl($scope, ngToast, loginService){
            var vm = this;
            vm.login = 1;
            vm.username = loginService.getuser();
            

           
            
        }
    
    })();