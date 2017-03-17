"use strict";

(function () {
    angular
        .module("burnIt.login")
        .controller("SignupCtrl", ["CommonSvc", "$location", "$http",SignupCtrl]);

    function SignupCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        var userData;
        var weekData;
        (function () {
            for (var x = 0; x < 2; x++) {
                
                    if (CommonSvc.getUserData() ==undefined) {
                        if (x<1){
                          $http.get('../../documents/objects/userObject.json').then(function (response) {
                            userData = response.data;
                            }); 
                            
                            $http.get('../../documents/objects/weekObject.json').then(function (response) {
                            weekData = response.data;  
                            });
                            
                        }else if(x> 1){
                           userData.deit.push(weekData); 
                        }
                       
                    }
                    else {
                       userData = CommonSvc.getUserData();
                    }
                
            }    
        })();
        
        
        function route(param) {
            switch (param){ 
                case 'signup':

                    if ((vm.password === vm.re_password)|| !vm.user_name== undefined){
                        
                    userData.profile.first_name = vm.first_name;
                    userData.profile.last_name = vm.last_name;
                    userData.profile.address = vm.address;
                    userData.profile.phone_number = vm.phone_number;
                    userData.profile.email = vm.email;
                    userData.profile.user_name = vm.user_name;
                    userData.profile.password = vm.password;
                    CommonSvc.setUserData(userData);
                    console.log(userData);
                    $http.post('/api/user/data', userData).then(function (response) {
                            
                            return response;
                        });
                        
                        $location.path('/profile');
                    
                    }else {
                     window.alert("The password must match");   
                    }                 
                    
                    break;
                case 'back':
                    $location.path('/login');
                    break;
               
            }
        } 
    }
})();