(function () {
    "use strict";
    angular.module("burnIt.planning", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/planning", {
                templateUrl: "planning/views/planning.html",
                controller: "PlanningCtrl",
                controllerAs: "vm"
            });
        }])
})();