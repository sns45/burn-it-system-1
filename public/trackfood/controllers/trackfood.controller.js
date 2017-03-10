"use strict";
(function () {
    angular.module("burnIt.trackfood").controller("TrackFoodCtrl", ["CommonSvc", "$location", TrackFoodCtrl]);

    function TrackFoodCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        var queryFood = {
                    "query": ""
                };
        function route(param) {
            switch (param) {
            case 'search':
                queryFood.query = vm.food;
                CommonSvc.setFoodtrack(queryFood);
                $location.path('/nutritionfacts/details');
                break;
            case 'back':
                $location.path('/planning');
                break;
            }
        }
    }
})();