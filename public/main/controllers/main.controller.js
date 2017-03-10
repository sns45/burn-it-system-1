"use strict";

(function () {
    angular
        .module("burnIt.main")
        .controller("MainCtrl", ["CommonSvc", "$location","$http", MainCtrl]);

    function MainCtrl(CommonSvc, $location,$http) {
        var vm = this;
        vm.route = route;
        vm.genders = ["Male", "Female"];
        vm.person = {};
        vm.reqData = {"weight":{"value":"","unit":"kg"},"height":{"value":" ","unit":"cm"},"sex":"","age":""};
        vm.reqBmi = {};
      //  vm.queryFood = {"query":"for breakfast i ate 2 eggs, bacon, and french toast"};
        
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
                     CommonSvc.setPerson(vm.person);
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
                      /*$http.post('/api/main/bmi',JSON.stringify(reqData) ).then(function(response){
                      console.log(JSON.stringify(response));
                      CommonSvc.setReqBmi(response);  */ 
                      //});
                     
                     $location.path("/planning");
                 }
                    break;
            }
        }
    }









})();
