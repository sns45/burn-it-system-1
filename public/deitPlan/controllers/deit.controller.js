"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("DeitCtrl", ["CommonSvc", "$location", "$uibModal", DeitCtrl]);

    function DeitCtrl(CommonSvc, $location, $uibModal) {
        var vm = this;
        vm.route = route;
        vm.numberOfCal;
        var week;
        var userData;
        var weekData;
        (function () {
            vm.weekArray = [{
                'day': 'Monday'
            }, {
                'day': 'Tuesday'
            }, {
                'day': 'Wednesday'
            }, {
                'day': 'Thursday'
            }, {
                'day': 'Friday'
            }, {
                'day': 'Saturday'
            }, {
                'day': 'Sunday'
            }];
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getUserData() == undefined) {
                        console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    } 
                }
                else {
                        userData = CommonSvc.getUserData();
                       // weekData = CommonSvc.getWeekData();
                        console.log(userData);
                       // console.log(weekData);
                    }
            }
        })();
        (function () { 
            console.log("I am here");
           weekData = CommonSvc.getWeekData();        
            })();
        
        vm.go = function (obj) {
          week = obj ;
        };

        function route(param) {
            switch (param) {
            case 'save':
                    for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getUserData() == undefined) {
                        console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    } 
                }
                else {
                       if (CommonSvc.getWeekData() == undefined){
                        
                        console.log("No week data loaded");
                    }
                    else{
                        userData.deit.push(weekData);
                        console.log(userData);
                        CommonSvc.setUserData(userData);
                    }
                }
                 }
                    
                $location.path('/planning');
                break;
            case 'preview':
                // save logic
                // CommonSvc.set
                $location.path('/deit');
                break;
            case 'edit':
                $location.path('/deit');
                break;
            case 'back':
                $location.path('/planning');
                break;
            case 'BF':
              //  CommonSvc.setNumberOfCal(500);
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm"
                    , size: 'lg'
                    , resolve: {
                        callerData: function () {  
                            return {
                                "maxCal": 500,
                                 "day"   :JSON.stringify(week.day),
                                 "meal"  :"breakfast"
                            };
                        }
                    }
                });
                break;
            case 'FS':
             //   CommonSvc.setNumberOfCal(200);
                    //  $location.path('/deit/daily');
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm"
                    , size: 'lg'
                    , resolve: {
                        callerData: function () {  
                            return {
                                "maxCal": 200,
                                "day"   :JSON.stringify(week.day)
                                ,"meal"  :"firstSnack" 
                            };
                        }
                    }
                });
                break;
            case 'LN':
               // CommonSvc.setNumberOfCal(500);
                    //  $location.path('/deit/daily');
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm"
                    , size: 'lg'
                    , resolve: {
                        callerData: function () {  
                            return {
                                "maxCal": 500,
                                "day"   :JSON.stringify(week.day)
                                ,"meal"  :"lunch"
                            };
                        }
                    }
                });
                break;
            case 'SS':
               // CommonSvc.setNumberOfCal(200);
                    //  $location.path('/deit/daily');
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm"
                    , size: 'lg'
                    , resolve: {
                        callerData: function () {  
                            return {
                                "maxCal": 200,
                                "day"   :JSON.stringify(week.day)
                                ,"meal"  :"secondSnack"
                            };
                        }
                    }
                });
                break;
            case 'DN':
                   
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm"
                    , size: 'lg'
                    , resolve: {
                        callerData: function () {  
                            return {
                                "maxCal": 500,
                                "day"   :JSON.stringify(week.day)
                                ,"meal"  :"diner"
                            };
                        }
                    }
                });
                break;
            case 'M':
                vm.customStyle.colorClass = "blue";
                $location.path('/deit');
                break;
            }
        }
    }
})();