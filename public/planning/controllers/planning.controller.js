"use strict";

(function () {
    angular
        .module("burnIt.planning")
        .controller("PlanningCtrl", ["$scope","CommonSvc", "$location","$http", PlanningCtrl]);
 
    function PlanningCtrl($scope, CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
       // console.log(JSON.stringify(CommonSvc.getReqData()));
        var obj = {"weight":{"value":"","unit":"kg"},"height":{"value":" ","unit":"cm"},"sex":"","age":""};
         
       
        (function () {  
         
            for (var x=0; x<5; x++){
                if(x < 2){
                     obj = JSON.stringify(CommonSvc.getReqData()) ;
                }
                else {
                    if (obj==null){
                    }
                    else{
                $http.post('/api/main/bmi', obj ).then(function (response) {
                vm.status = response.data.bmi.status;
                vm.risk = response.data.bmi.risk;
                vm.weight = response.data.weight.kg + " kg";
                vm.ideslWeight = response.data.ideal_weight;
                return response;
            }); 
                    }
                
                }
            }
            
             
            
        })();
        
        
        function route(param) {
            
            switch (param){
                case 'nutritionists':
                    $location.path('/nutritionists');
                    break;
                case 'workout':
                    $location.path('/workout');
                    break;
                case 'diet':
                        $location.path('/deit');
                        break;
                case 'nutritionfacts':
                        $location.path('/nutritionfacts');
                        break;
                 case 'login':
                    $location.path('/login');
                    break;
                 case 'Back':
                       $location.path('/');
                       break;

            }
        }
  
    }

})();