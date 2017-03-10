"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("DeitPlanCtrl", ["CommonSvc", "$location", "$http", DeitPlanCtrl]);

    function DeitPlanCtrl(CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        vm.totalCal = 0;
        vm.numCal = 0;
        var cal;
        
        var calories = [];
      
        var queryFood = {
            "query": ""
        };
        var obj = {};
        
        (function () {  
        
           vm.maxCal = CommonSvc.getNumberOfCal(); 
        })();
        
        function route(param) {
            switch (param) {
            case 'add':
                //  vm.totalCal = vm.totalCal + vm.numCal;
                var pretotal = vm.totalCal + vm.numCal;
                if (pretotal >= vm.maxCal) {
                    window.alert("You reatch the Maximum number of Calories");
                }
                else {
                    vm.totalCal = pretotal;
                }
                //   vm.numCal = 0;
                $location.path('/deit/daily');
                break;
            case 'save':
                $location.path('/deit');
                break;
                //case 'preview':
                // save logic
                // CommonSvc.set
                /*$location.path('/register');
                // $location.path('/deit/daily/preview');
                //  break;*/
            case 'edit':
                $location.path('/deit/daily');
                break;
            case 'back':
                $location.path('/deit');
                break;
            case 'search':
                var cal = 0;
                queryFood.query = vm.food;
                $http.post('/api/nutritionix/deit', JSON.stringify(queryFood)).then(function (response) {
                    for (var i = 0; i < response.data.foods.length; i++) {
                        if (response.data.foods[i].nf_calories == null || response.data.foods[i].nf_calories == "") {}
                        else {
                            cal = parseInt(cal) + parseInt(response.data.foods[i].nf_calories);
                        }
                    }
                    if (cal >= vm.maxCal) {
                        window.alert("You reatch the Maximum number of Calories");
                    }
                    else {
                        vm.numCal = parseInt(cal);
                    }
                });
                
                $location.path('/deit/daily');
                break;
            }
        }
    }
})();