(function(){

    'use strict';

    angular.module('officetrans')
            .controller('mainctrl', mainctrl);

    function mainctrl($scope,ngToast){
        var vm = this;
        vm.msg = 'hellow';
        vm.display = function(){
            console.log(vm.msg);
            ngToast.create('a toast message...');
        }
        
        
    }

})();