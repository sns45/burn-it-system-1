(function () {
    "use strict";
    angular.module("burnIt.main", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "main/views/main.html",
                controller: "MainCtrl",
                controllerAs: "vm"
            });
        }])
})();