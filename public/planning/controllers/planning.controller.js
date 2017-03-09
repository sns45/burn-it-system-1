"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["$scope", "CommonSvc", "$location", "$http", PlanningCtrl]);

    function PlanningCtrl($scope, CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;

        // IIFE (Immediately Invoked Function Expression)
        /*Look at UI BOOSTRAP FOR THE POPING UP VIEW https://github.com/angular-ui/bootstrap*/
        (function () {
            $http.post('/api/main/bmi', CommonSvc.getReqData()).then(function (response) {
                console.log(response.data);
                /*vm.status = response.data.bmi.status;
                vm.risk = response.data.bmi.risk;
                vm.weight = response.data.weight.kg + " kg";
                vm.ideslWeight = response.data.ideal_weight;*/
            });
        })();

        function route(param) {
            //            console.log(CommonSvc.getReqBmi());
            switch (param) {
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