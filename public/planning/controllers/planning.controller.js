"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["CommonSvc", PlanningCtrl]);

    function PlanningCtrl(CommonSvc) {
        var vm = this;

        vm.person = CommonSvc.getPerson()

        console.log(vm.person);
    }
})();