/*"use strict";

(function () {
    angular
        .module("burnIt.nutritionists")
        .controller("NutritionistsCtrl", ["CommonSvc", "$location", NutritionistsCtrl]);

    function NutritionistsCtrl(CommonSvc, $location) {
        var vm = this;
        vm.backToPlan ={};
        vm.backtoplanning() = backtoplanning;

        function backtoplanning(){
             $location.path("/planning");
        }

    }
})();*/
"use strict";

(function () {
    angular
        .module("burnIt.nutritionists")
        .controller("NutritionistsCtrl", ["CommonSvc", "$location", NutritionistsCtrl]);

    function NutritionistsCtrl(CommonSvc, $location) {
        var vm = this;

        vm.route = route;
        function route(param) {
            switch (param){
                case 'Back':
                    $location.path('/planning');
                    break;
                case 'Save':
                    // save logic
                    // CommonSvc.set
                    $location.path('/planning');
                    break;
            }
        }

//        (function() {
//            if (CommonSvc.getPerson() === undefined) {
//                $location.path('Start')
//            }
//        })
//
    }
})();
