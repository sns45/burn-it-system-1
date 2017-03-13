"use strict";

(function () {
    angular
        .module("burnIt.nutritionists")
        .controller("NutritionistsCtrl", ["CommonSvc", "$location", "$http", NutritionistsCtrl]);

    function NutritionistsCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.selectFunction = selectFunction;
        var url = "";
        var data;
        (function () {
            //vm.rating ="./../document/stars/2Stars.jpg";
            //  vm.rating =$location(2Stars.jpg);
        })();

        (function () {

            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getPersonData()['zip_code'])
                    url = "/api/main/yelp/nutritionists/location/" + CommonSvc.getPersonData()['zip_code'];
                } else {
                    if (!CommonSvc.getPersonData()['zip_code']) {
                        console.log("THE URL IS NULL");
                        $location.path('/');
                    } else {
                        $http.get(url).then(function (response) {
                            console.log(response.data.businesses);
                            if (response.data.businesses.length > 5) {
                                response.data.businesses.splice(5, response.data.businesses.length);
                                vm.businessesArray = response.data.businesses;
                                vm.businessesArray.forEach(function(value) {
                                    ratingFunc(value);
                                });
                                console.log(vm.businessesArray);
                            } else {
                                vm.businessesArray = response.data.businesses;
                            }
                            return response;
                        });
                    }

                }
            }

        })();

        function selectFunction(obj) { // Might want to rename
            console.log(obj);
//            vm.selected = //obj you select
        }
        
        function route(param) {
            switch (param) {
                case 'Back':
                    $location.path('/planning');
                    break;
                case 'Save':
                    $location.path('/planning');
                    break;
            }
        }

        function ratingFunc(value) {

            if (value.rating == 5) {
                value.rating = "../../documents/stars/5Stars.png";
            }
            if (value.rating == 4.5) {
                value.rating = "../../documents/stars/4.5Stars.png";
            }
            if (value.rating == 4) {
                value.rating = "../../documents/stars/4Stars.png";
            }
            if (value.rating == 3.5) {
                value.rating = "../../documents/stars/3.5Stars.png";
            }
            if (value.rating == 3) {
                value.rating = "../../documents/stars/3Stars.png";
            }
            if (value.rating == 2.5) {
                value.rating = "../../documents/stars/2.5Stars.png";
            }
            if (value.rating == 2) {
                value.rating = "../../documents/stars/2Stars.png";
            }
        }

    }
})();