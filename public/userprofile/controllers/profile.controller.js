"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileCtrl", ["CommonSvc", "$location", ProfileCtrl]);

    function ProfileCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        var userData;
        (function () {
            for (var x = 0; x < 2; x++) {
                if (CommonSvc.getUserData() == undefined) {
                    // Make a get call here from the db to load the data
                    // $location.path('/');
                }
                else {
                    userData = CommonSvc.getUserData();
                    vm.first_name = userData.profile.first_name;
                    vm.last_name = userData.profile.last_name;
                    vm.phone_number = userData.profile.phone_number;
                    vm.address = userData.profile.address;
                    vm.age = userData.profile.age;
                    vm.height = userData.profile.height + " cm";
                    vm.weight = userData.profile.weight + " kg";
                }
            }
        })();

        function route(param) {
            switch (param) {
            case 'ProfileNutritionists':
                $location.path('/profile/nutritionist-lists');
                break;
            case 'ProfileDietPlan':
                $location.path('/profile/week-diet-plan');
                break;
            case 'SignOut':
                $location.path('/');
                break;
            }
        }
    }
})();