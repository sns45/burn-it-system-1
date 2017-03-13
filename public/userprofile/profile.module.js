(function () {
    "use strict";
    angular.module("burnIt.profile", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/profile", {
                templateUrl: "userprofile/views/userprofile.html",
                controller: "ProfileCtrl",
                controllerAs: "vm"
            });
            $routeProvider.when("/profile/nutritionist-lists", {
                templateUrl: "userprofile/views/nutritionists-modal.html",
                controller: "ProfileNutritionists",
                controllerAs: "vm"
            });
            $routeProvider.when("/profile/week-diet-plan", {
                templateUrl: "userprofile/views/week-diet-plan.html",
                controller: "ProfileDietPlan",
                controllerAs: "vm"
            });
        }])
})();