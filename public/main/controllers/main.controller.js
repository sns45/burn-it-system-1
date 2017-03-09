"use strict";

(function () {
    angular
        .module("burnIt.main")
        .controller("MainCtrl", ["CommonSvc", "$location", "$http", MainCtrl]);

    function MainCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.genders = ["Male", "Female"];
        vm.person = {};
        var reqData = {
            "weight": {
                "value": "",
                "unit": "kg"
            },
            "height": {
                "value": " ",
                "unit": "cm"
            },
            "sex": "",
            "age": ""
        };
        vm.reqBmi = {};

        function route(param) {
            switch (param) {
                case 'login':
                    $location.path('/login');
                    break;
                case 'register':
                    // save logic
                    // CommonSvc.set
                    /*$location.path('/register');*/
                    $location.path('/register');
                    break;
                case 'bmi':
                    if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                        window.alert("You must enter an age between 18 and 100");
                    } else {
                        // console.log(vm.person);
                        CommonSvc.setPerson(vm.person);
                        reqData.weight.value = vm.person.weight;
                        reqData.height.value = vm.person.height;
                        reqData.age = vm.person.age;
                        if (vm.person.gender == "Male") {
                            reqData.sex = "m";
                        } else {
                            reqData.sex = "f";
                        }
                        CommonSvc.setReqData(JSON.stringify(reqData));
                        
                        $location.path("/planning");
                    }
                    break;
            }
        }
    }









})();