"use strict";
(function () {
    angular.module("burnIt.nutritionists").controller("NutritionistsCtrl", ["CommonSvc", "$location", "$http", NutritionistsCtrl]);

    function NutritionistsCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.selectFunction = selectFunction;
        var url = "";
        var data;
        var nutritionistObj = {
            "name": ""
            , "address": ""
            , "phone_number": ""
            , "rating": ""
        };
        var tempArray =[];
        var zipcode;
        var userData;
        (function () {
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    userData = CommonSvc.getUserData();
                    
                    if (userData ==undefined) {
                       console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    }
                    else {
                       
                        zipcode = userData.profile.address[0];  
                        url = "/api/main/yelp/nutritionists/location/" + zipcode;
                    }
                }
                else {
                    $http.get(url).then(function (response) {
                        if (response.data.businesses.length > 5) {
                            response.data.businesses.splice(5, response.data.businesses.length);
                            vm.businessesArray = response.data.businesses;
                            vm.businessesArray.forEach(function (value) {
                                ratingFunc(value);
                            });
                        }
                        else {
                            vm.businessesArray = response.data.businesses;
                        }
                        return response;
                    });
                }
            }
        })();

        function selectFunction(obj) {
             nutritionistObj.phone_number = obj.display_phone;
             nutritionistObj.address = obj.location.display_address[0] + obj.location.display_address[1];
             nutritionistObj.name = obj.name;
             nutritionistObj.rating = obj.rating;
            /*if(nutritionistObj.address==""){}
            else{
             userData.nutritionists.push(nutritionistObj);   
            }*/
     
        }

        function route(param) {
            switch (param) {
            case 'Back':
                 //userData.nutritionists =[];
                console.log(userData);
               // CommonSvc.setUserData(userData);
                $location.path('/planning');
                break;
            case 'Save':
                userData.nutritionists.push(nutritionistObj);
                console.log(userData);
                CommonSvc.setUserData(userData);
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
            if (value.rating == 1.5) {
                value.rating = "../../documents/stars/1.5Stars.png";
            }
            if (value.rating == 1) {
                value.rating = "../../documents/stars/1Stars.png";
            }
            if(value.rating == ""||value.rating == 0) {
                value.rating = "../../documents/stars/0Stars.png";
            }
        }
    }
})();