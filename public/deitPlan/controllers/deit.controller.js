"use strict";

(function () {
    angular
        .module("burnIt.deitplan")
        .controller("DeitCtrl", ["CommonSvc", "$location", DeitCtrl]);

        function DeitCtrl(CommonSvc, $location) {
            var vm = this;
            vm.route = route;
            vm.numberOfCal ;
            function route(param) {
                switch (param){
                    case 'save':
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
                            CommonSvc.setNumberOfCal(500);
                            $location.path('/deit/daily');
                            break;
                    case 'FS':
                             CommonSvc.setNumberOfCal(200);
                            $location.path('/deit/daily');
                            break;
                    case 'LN':
                             CommonSvc.setNumberOfCal(500);
                            $location.path('/deit/daily');
                            break;
                    case 'SS':
                            CommonSvc.setNumberOfCal(200);
                            $location.path('/deit/daily');
                            break;    
                    case 'DN':
                             CommonSvc.setNumberOfCal(500);
                            $location.path('/deit/daily');
                            break;
                    case 'M':
                            vm.customStyle.colorClass = "blue";
                            $location.path('/deit');
                            break;
                }
            }
        }
})();
