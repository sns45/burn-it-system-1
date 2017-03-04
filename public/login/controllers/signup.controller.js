"use strict";

(function () {
    angular
        .module("burnIt.login")
        .controller("SignupCtrl", ["CommonSvc", "$location", SignupCtrl]);

    function SignupCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){
                case 'signup':
                    $location.path('/profile');
                    break;
               
            }
        } 
    }
})();