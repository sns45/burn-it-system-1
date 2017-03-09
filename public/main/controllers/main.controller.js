"use strict";

(function () {
    angular
        .module("burnIt.main")
        .controller("MainCtrl", ["CommonSvc", "$location", MainCtrl]);

    /*function MainCtrl(CommonSvc, $location) {
        var vm = this;

        vm.genders = ["Male", "Female"];
        vm.person = {};
        vm.sendPerson = sendPerson;

        function sendPerson() {
            if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                window.alert("You must enter an age between 18 and 100");
            } else {
                console.log(vm.person);
                CommonSvc.setPerson(vm.person);
                $location.path("/planning");
            }
        }  {"weight":{"value":"85.00","unit":"kg"},"height":{"value":"170.00","unit":"cm"},"sex":"m","age":"24"}
    }*/
    function MainCtrl(CommonSvc, $location) {
        var vm = this;
        vm.route = route;
        vm.genders = ["Male", "Female"];
        vm.person = {};
        vm.reqData = {"weight":{"value":"","unit":"kg"},"height":{"value":" ","unit":"cm"},"sex":"","age":""};
        function route(param) {
            switch (param){
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
                     vm.reqData.weight.value = vm.person.weight;
                     vm.reqData.height.value = vm.person.height;
                     vm.reqData.age = vm.person.age;
                     if (vm.person.gender == "Male"){
                       vm.reqData.sex = "m"; 
                     }
                     else{
                        vm.reqData.sex = "f";  
                     }
                     CommonSvc.setReqData(vm.reqData);
                     CommonSvc.setPerson(vm.person);
                     $location.path("/planning");
                 }
                    break;
            }
        }
    }









})();
