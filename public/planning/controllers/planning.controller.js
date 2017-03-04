"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["CommonSvc", "$location", PlanningCtrl]);

    function PlanningCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){   
                case 'nutritionists':
                    $location.path('/nutritionists');
                    break;
                case 'workout':
                    // save logic
                    // CommonSvc.set
                    /*$location.path('/register');*/
                    $location.path('/workout');
                    break;
                 case 'login':
                    $location.path('/login');
                    break;
            }
        }
    }
    
    
    
   // function PlanningCtrl(CommonSvc, $location) {
      /*  var vm = this;
        vm.route = route;*/
        /* vm.workout = {};
         vm.sendWorkout = sendWorkout;
          vm.sendNutri = sendNutri;
        function sendWorkout() {
                $location.path("/workout");
           
        };
        function sendNutri() {
                $location.path("/nutritionists");
           
        }
        */
    
  //  }
})();

