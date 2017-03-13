"use strict";

(function () {
    angular
        .module("burnIt.profile")
        .controller("ProfileNutritionists", ["CommonSvc", "$location", ProfileNutritionists]);

     function ProfileNutritionists(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        function route(param) {
            switch (param){ 
                case 'NutritionistsSave' :
                    $location.path('/profile');
                    break;
                case 'NutritionistsEdit' :
                    $location.path('/');
                    break;     
            }
        } 
    }
})();
