(function(){

    'use strict';

    angular.module('officetrans')
            .controller('mainctrl', mainctrl);

    function mainctrl($scope,ngToast){
        var vm = this;
        vm.msg = 'Testuser';
        vm.test = function(){
            console.log(vm.msg);
            ngToast.create({
                className: 'success',
                content: '<strong>Successfully loggedout</strong> '
              });
        }
        
        
    }

})();