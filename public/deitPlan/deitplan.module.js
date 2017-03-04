(function () {
    "use strict";
    angular.module("burnIt.deitplan", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/deitplan/daily", {
                templateUrl: "deitPlan/views/dailydeit.html",
                controller: "DeitPlanCtrl",
                controllerAs: "vm"
            });
        }])
})();