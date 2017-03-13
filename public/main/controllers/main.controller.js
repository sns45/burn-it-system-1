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
         var personData ={"first_name":"", "last_name":"","age":"","gender":"","height":"","weight":"","zip_code":""};
        vm.reqBmi = {};
      //  vm.queryFood = {"query":"for breakfast i ate 2 eggs, bacon, and french toast"};
        
        function route(param) {
            switch (param){
                case 'login':
                    
                     if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                     window.alert("You must enter an age between 18 and 100");
                 } else {
                     
                     CommonSvc.setPerson(vm.person);
                     personData.age = vm.person.age;
                     personData.gender = vm.person.gender;
                     personData.height = vm.person.height;
                     personData.weight = vm.person.weight;
                     personData.zip_code = vm.person.zipcode;
                     CommonSvc.setPersonData(personData);
                     
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
                     
                     $location.path('/login');
                 }
                    break;
                case 'register':
                     if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                     window.alert("You must enter an age between 18 and 100");
                 } else {
                     
                     CommonSvc.setPerson(vm.person);
                     personData.age = vm.person.age;
                     personData.gender = vm.person.gender;
                     personData.height = vm.person.height;
                     personData.weight = vm.person.weight;
                     personData.zip_code = vm.person.zipcode;
                     CommonSvc.setPersonData(personData);
                     
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
                     
                     $location.path('/register');
                 }
                    break;
                 case 'bmi':
                    
                if (vm.person.age == undefined || vm.person.gender == undefined|| vm.person.height == undefined|| vm.person.weight == undefined|| vm.person.zipcode == undefined) {
                        window.alert("You must enter your Zip Code, Age, Gender, Weight and Height to continue");
                        $location.path('/');
                    }else{
                        if (!vm.person.age || vm.person.age < 18 || vm.person.age > 100) {
                     window.alert("You must enter an age between 18 and 100");
                 } else { 
                     CommonSvc.setPerson(vm.person);
                     personData.age = vm.person.age;
                     personData.gender = vm.person.gender;
                     personData.height = vm.person.height;
                     personData.weight = vm.person.weight;
                     personData.zip_code = vm.person.zipcode;
                     CommonSvc.setPersonData(personData);
                     
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
                     
                     $location.path("/planning");
                 }
                        
                    }
                 
                    break;
            }
        }
    }









})();
