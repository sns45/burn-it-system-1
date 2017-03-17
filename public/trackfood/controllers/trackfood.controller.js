"use strict";
(function () {
    angular.module("burnIt.trackfood").controller("TrackFoodCtrl", ["CommonSvc", "$location", "$uibModal", TrackFoodCtrl]);

    function TrackFoodCtrl(CommonSvc, $location, $uibModal) {
        var vm = this;
        vm.example = example;
        vm.route = route;
        vm.viewSearchResultsModal = viewSearchResultsModal;



        function example(s) {
            console.log(s);
        }

        function route(param) {
            switch (param) {
                case 'back':
                    $location.path('/planning');
                    break;
            }
        }

        function viewSearchResultsModal() {
            var queryFood = {
                "query": vm.food
            };
            var modalInstance = $uibModal.open({
                templateUrl: '/trackfood/views/nutritionfact.html',
                controller: 'NutritionFactCtrl',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    callerData: function () {
                        return {
                            "query": queryFood
                        };
                    }
                }
            });
        }

    }
})();