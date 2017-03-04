(function () {
    "use strict";
    angular.module("burnIt.workout", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/workout", {
                templateUrl: "workout/views/workout.html",
                controller: "WorkOutCtrl",
                controllerAs: "vm"
            });
        }])
})();
