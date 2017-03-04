(function () {
    "use strict";
    angular.module("burnIt.deitplan", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/deit", {
                templateUrl: "deitPlan/views/deit.html",
                controller: "DeitCtrl",
                controllerAs: "vm"
            });
            $routeProvider.when("/deit/daily", {
                templateUrl: "deitPlan/views/deitdaily.html",
                controller: "DeitPlanCtrl",
                controllerAs: "vm"
            });
            $routeProvider.when("/deit/daily/preview", {
                templateUrl: "deitPlan/views/deitpreview.html",
                controller: "DeitPlanPreviewCtrl",
                controllerAs: "vm"
            });

        }])
})();
