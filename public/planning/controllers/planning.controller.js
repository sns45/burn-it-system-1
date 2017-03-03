"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["CommonSvc", "$location", PlanningCtrl]);

    function PlanningCtrl(CommonSvc, $location) {
        var vm = this;
        
         vm.workout = {};
         vm.sendWorkout = sendWorkout;
          vm.sendNutri = sendNutri;
        function sendWorkout() {
                $location.path("/workout");
           
        };
        function sendNutri() {
                $location.path("/nutritionists");
           
        }
    }
})();

