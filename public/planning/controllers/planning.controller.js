"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["$scope","CommonSvc", "$location","$http", PlanningCtrl]);
 
    function PlanningCtrl($scope, CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;

        function route(param) {
          //  console.log(CommonSvc.getReqBmi());
           // $scope.weight = 20KG;
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
        }
  
    }

})();
