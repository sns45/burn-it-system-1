"use strict";
(function () {
    angular.module("burnIt.main").controller("MainCtrl", ["CommonSvc", "$location", "$http", MainCtrl]);

    function MainCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.genders = ["Male", "Female"];
        vm.person = {};
        var userObject;
        (function () {
            $http.get('../../documents/objects/userObject.json').then(function (response) {
                userObject = response.data;
            });
        })();

        function route(param) {
            switch (param) {
            case 'login':
                $location.path('/login');
                break;
            case 'register':
                $location.path('/register');
                break;
            case 'bmi':
                if (vm.person.age == undefined || vm.person.gender == undefined || vm.person.height == undefined || vm.person.weight == undefined || vm.person.zipcode == undefined) {
                    window.alert("You must enter your Zip Code, Age, Gender, Weight and Height to continue");
                    $location.path('/');
                }
                else {
                    if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                        window.alert("You must enter an age between 18 and 100");
                    }
                    else {
                        userObject.profile.age = vm.person.age;
                        userObject.profile.height = vm.person.height;
                        userObject.profile.weight = vm.person.weight;
                        userObject.profile.zipcode = vm.person.zipcode;
                        if (vm.person.gender == "Male") {
                            userObject.profile.gender = "m";
                        }
                        else {
                            userObject.profile.gender = "f";
                        }
                        CommonSvc.setUserData(userObject);
                        $location.path("/planning");
                    }
                }
                break;
            }
        }
    }
})();