"use strict";
(function () {
    angular.module("burnIt.workout").controller("WorkOutCtrl", ["CommonSvc", "$location", "$http", WorkOutCtrl]);

    function WorkOutCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.selectFunction = selectFunction;
        var url = "";
        var data;
        var workoutObj ={};/*= {
            "name": ""
            , "address": ""
            , "phone_number": ""
            , "rating": ""
        };*/
        var zipcode;
        var userData;
        (function () {
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    userData = CommonSvc.getUserData();
                    if (userData == undefined) {
                        console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    }
                    else {
                        zipcode = userData.profile.zipcode;
                        url = "/api/main/yelp/workout/location/" + zipcode;
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
            workoutObj.phone_number = obj.display_phone;
            workoutObj.address = obj.location.display_address[0] + obj.location.display_address[1];
            workoutObj.name = obj.name;
            workoutObj.rating = obj.rating;
            /*if (workoutObj.address == "") {}
            else {
                userData.work_out.push(workoutObj);
            }*/
        }

        function route(param) {
            switch (param) {
            case 'Back':
                console.log(userData);
                $location.path('/planning');
                break;
            case 'Save':
                userData.work_out.push(workoutObj);
                console.log(userData);
                CommonSvc.setUserData(userData);
                $location.path('/planning');
                break;
            }
        }

        /*function route(param) {
            switch (param) {
            case 'Back':
                console.log(userData);
                $location.path('/planning');
                break;
            case 'Save':
                console.log(userData);
                CommonSvc.setUserData(userData);
                $location.path('/planning');
                break;
            }
        }*/

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