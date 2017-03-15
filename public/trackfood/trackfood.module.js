(function () {
    "use strict";
    angular.module("burnIt.trackfood", ["ngRoute", "ui.bootstrap"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/trackfoods", {
                templateUrl: "trackfood/views/trackfood.html",
                controller: "TrackFoodCtrl",
                controllerAs: "vm"
            });
            $routeProvider.when("/nutritionfacts/details", {
                templateUrl: "trackfood/views/nutritionfact.html",
                controller: "NutritionFactCtrl",
                controllerAs: "vm"
            });
        }])
})();