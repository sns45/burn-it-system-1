"use strict";

(function () {
    angular
        .module("burnIt.login")
        .controller("LoginCtrl", ["CommonSvc", "$location", LoginCtrl]);

    function LoginCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){
                case 'SignIn':
                    $location.path('/profile');
                    break;
                case 'Register':
                    
                    $location.path('/register');
                    break;
                 case 'Fpassword':
                    $location.path('/profile');
                    break;
                case 'back':
                    $location.path('/planning');
                    break;
            }
        }
    }
})();
