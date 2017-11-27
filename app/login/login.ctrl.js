(function(){
    
        'use strict';
    
        angular.module('officetrans')
                .controller('loginCtrl', loginCtrl);
    
        function loginCtrl($scope,$rootScope,ngToast,loginService, $http){
            var _selected;
            
            var vm = this;
            vm.login = 1;

            vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            vm.login = function(){
                loginService.authorize('lahiru','tewd');
                console.log(1);
            }

            vm.logout = function(){
                loginService.logout();
                console.log(0);
            }
            
            vm.username = loginService.getuser();
            vm.getLocation = function(val) {
                return $http.get('https://maps.googleapis.com/maps/api/geocode/json', {
                  params: {
                    address: val,
                    key : 'AIzaSyDhGexrmbTyG0b_tUCD5wOeEpLDF4nwXQ0',
                    sensor: false
                    
                  }
                }).then(function(response){
                  return response.data.results.map(function(item){
                    return item.formatted_address;
                  });
                });
              };
            
            
            
        }
    
})();