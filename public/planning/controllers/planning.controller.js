"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", [/*"$scope",*/"CommonSvc", "$location",/*"PlanningDataSvc","$uibModalInstance",*/ PlanningCtrl]);
 
    function PlanningCtrl(/*$scope,*/ CommonSvc, $location/*,PlanningDataSvc,$uibModalInstance*/) {
        var vm = this;
        vm.route = route;
        function route(param) {
         
            console.log(CommonSvc.getReqData());
            switch (param){
                case 'nutritionists':
                    $location.path('/nutritionists');
                    break;
                case 'workout':
                    $location.path('/workout');
                    break;
                case 'diet':
                        $location.path('/deit');
                        break;
                case 'nutritionfacts':
                        $location.path('/nutritionfacts');
                        break;
                 case 'login':
                    $location.path('/login');
                    break;
                 case 'Back':
                       $location.path('/');
                       break;

            }
        }/*;
        
        $scope.save = function(){
        
            var _req = {"weight":{"value":"85.00","unit":"kg"},"height":{"value":"170.00","unit":"cm"},"sex":"m","age":"24","waist":"34.00","hip":"40.00"};
            
            PlanningDataSvc.getBmi(JSON.stringify(_req)).then(function(data)
              {
               // $uibModalInstance.close();
                 console.log(data);
            }); 
        }*/
  
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
