(function () {
    "use strict";
    angular.module("burnIt.profile", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/profile", {
                templateUrl: "userprofile/views/userprofile.html",
                controller: "ProfileCtrl",
                controllerAs: "vm"
            });
        }])
})();