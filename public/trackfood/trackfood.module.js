(function () {
    "use strict";
    angular.module("burnIt.trackfood", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/nutritionfacts", {
                templateUrl: "trackfood/views/trackfood.html",
                controller: "TrackFoodCtrl",
                controllerAs: "vm"
            });
        }])
})();