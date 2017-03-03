(function () {
    "use strict";
    angular.module("burnIt.loginSignup", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/login", {
                templateUrl: "loginSignup/views/login.html",
                controller: "LoginCtrl",
                controllerAs: "vm"
            });
        }])
})();