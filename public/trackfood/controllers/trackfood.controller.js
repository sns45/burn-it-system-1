"use strict";

(function () {
    angular
        .module("burnIt.trackfood")
        .controller("TrackFoodCtrl", ["CommonSvc", "$location", TrackFoodCtrl]);

        function TrackFoodCtrl(CommonSvc, $location) {
            var vm = this;
            vm.route = route;
            function route(param) {
                switch (param){
                    case 'search':
                            $location.path('/nutritionfacts');
                            break;
                    case 'back':
                            $location.path('/planning');
                            break;
                    

                }
            }
        }
})();