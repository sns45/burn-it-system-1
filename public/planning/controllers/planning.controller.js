"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["CommonSvc", "$location", PlanningCtrl]);

    function PlanningCtrl(CommonSvc, $location) {
        var vm = this;
        
         vm.workout = {};
         vm.sendWorkout = sendWorkout;

        function sendWorkout() {
                $location.path("/workout");
           
        }
    }
})();