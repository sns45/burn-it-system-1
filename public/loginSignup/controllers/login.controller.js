"use strict";

(function () {
    angular
        .module("burnIt.loginSignup", ["ngRoute"])
        .controller("LoginCtrl", ["CommonSvc", "$location", LoginCtrl]);

    function LoginCtrl(CommonSvc, $location) {
        var vm = this;
   
    }
})();