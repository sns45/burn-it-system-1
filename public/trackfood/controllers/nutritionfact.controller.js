"use strict";
(function () {
    angular.module("burnIt.trackfood").controller("NutritionFactCtrl", ["CommonSvc", "$location", "$http", "callerData", "$uibModal", "$uibModalInstance", NutritionFactCtrl]);

    function NutritionFactCtrl(CommonSvc, $location, $http, callerData, $uibModal, $uibModalInstance) {
        var vm = this;
        vm.close = close;
        vm.route = route;

        var obj;
        (function () {
            for (var x = 0; x < 5; x++) {
                if (x < 2) {
                    obj = callerData.query;
                    console.log(obj);
                } else {
                    if (obj == null) {} else {
                        $http.post('/api/nutritionix/deit', obj).then(function (response) {
                            vm.food_name = response.data.foods[0].food_name
                            vm.serving_qty = response.data.foods[0].serving_qty;
                            vm.serving_unit = response.data.foods[0].serving_unit;
                            vm.serving_weight_grams = response.data.foods[0].serving_weight_grams;
                            vm.nf_calories = response.data.foods[0].nf_calories;
                            vm.nf_total_fat = response.data.foods[0].nf_total_fat;
                            vm.nf_saturated_fat = response.data.foods[0].nf_saturated_fat;
                            vm.nf_cholesterol = response.data.foods[0].nf_cholesterol;
                            vm.nf_sodium = response.data.foods[0].nf_sodium;
                            vm.nf_total_carbohydrate = response.data.foods[0].nf_total_carbohydrate;
                            vm.nf_dietary_fiber = response.data.foods[0].nf_dietary_fiber;
                            vm.nf_sugars = response.data.foods[0].nf_sugars;
                            vm.nf_protein = response.data.foods[0].nf_protein;
                            vm.thumb = response.data.foods[0].photo.thumb;
                            // vm.highres  = response.data.foods[0].photo.highres;
                            /*vm.status = response.data.bmi.status;
                            vm.risk = response.data.bmi.risk;
                            vm.weight = response.data.weight.kg + " kg";
                            vm.ideslWeight = response.data.ideal_weight;*/
                            return response;
                        });
                    }
                }
            }
        })();

        function close() {
            $uibModalInstance.close();
        }
        
        function route(param) {
            switch (param) {
                case 'back':
                    $location.path('/trackfoods');
                    break;
            }
        }
        
    }
})();