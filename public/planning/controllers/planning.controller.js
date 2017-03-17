"use strict";
(function () {
    angular.module("burnIt.planning").controller("PlanningCtrl", ["$scope", "CommonSvc", "$location", "$http", PlanningCtrl]);

    function PlanningCtrl($scope, CommonSvc, $location, $http) {
        var vm = this;
        vm.route = route;
        var obj = {
            "weight": {
                "value": ""
                , "unit": "kg"
            }
            , "height": {
                "value": " "
                , "unit": "cm"
            }
            , "sex": ""
            , "age": ""
        };
        var userData;
        (function () {
            for (var x = 0; x < 3; x++) {
                userData = CommonSvc.getUserData();
                if (x < 2) {
                if (userData == null || userData == undefined) {
                        console.log("please enter the zip code, and user informations");
                        $location.path('/');
                    break;
                    }else{  
                    obj.weight.value = userData.profile.weight;
                    obj.height.value = userData.profile.height;
                    obj.sex = userData.profile.gender;
                    obj.age = userData.profile.age;
                    }
                    
                }
                else {
                        $http.post('/api/main/bmi', obj).then(function (response) {
                            vm.status = response.data.bmi.status;
                            vm.risk = response.data.bmi.risk;
                            vm.weight = response.data.weight.kg + " kg";
                            vm.ideslWeight = response.data.ideal_weight;
                            userData.planning.current_weigth = response.data.weight.kg;
                            userData.planning.ideal_weight = response.data.ideal_weight;
                            userData.planning.risk = response.data.bmi.risk;
                            userData.planning.status = response.data.bmi.status;
                            CommonSvc.setUserData(userData);
                            //console.log(userData);
                            return response;
                        });
                    
                }
            }
        })();

        function route(param) {
            switch (param) {
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
                $location.path('/trackfoods');
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