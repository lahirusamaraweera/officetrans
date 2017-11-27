(function(){
    
        'use strict';
    
        angular.module('officetrans')
                .service('loginService', loginService);
    
        function loginService($rootScope, ngToast){

            var lg = this;
            lg.login = 0;
            lg.username = null;

            lg.authorize = function(name,pass){
                lg.login = 1;
                lg.username = name;
                $rootScope.login = 1;
                ngToast.create({
                    className: 'success',
                    content: '<strong>Successfully</strong> Authorized.'
                    });
            }
            
            lg.getuser = function(){
                return lg.username;
            }

            lg.logout = function(){
                lg.login = 0;
                lg.username = null;
                $rootScope.login = 0;
                ngToast.create({
                    className: 'warning',
                    content: '<strong>Successfully</strong> loggedout.'
                  });
            }

           
            
            
        }
    
})();