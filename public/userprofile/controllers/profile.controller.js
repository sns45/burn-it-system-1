"use strict";

(function () {
    angular
        .module("burnIt.profile")
        .controller("ProfileCtrl", ["CommonSvc", "$location", ProfileCtrl]);

     function ProfileCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){
                case 'ProfileNutritionists' :
                    $location.path('/profile/nutritionist-lists');
                    break;
                case 'ProfileDietPlan' :
                    $location.path('/profile/week-diet-plan');
                    break;
                case 'SignOut':
                    $location.path('/');
                    break;     
            }
        } 
    }
})();
