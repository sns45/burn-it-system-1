"use strict";

(function () {
    angular
        .module("burnIt.profile")
        .controller("ProfileDietPlan", ["CommonSvc", "$location", ProfileDietPlan]);

     function ProfileDietPlan(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){
                case 'DietPlanExit' :
                    $location.path('/profile');
                    break;
                case 'DietPlanEdit' :
                    $location.path('/profile');
                    break;
                case 'SignOut':
                    $location.path('/');
                    break;     
            }
        } 
    }
})();
