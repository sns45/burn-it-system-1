"use strict";

(function () {
    angular
        .module("burnIt.deitplan")
        .controller("DeitPlanCtrl", ["CommonSvc", "$location", DeitPlanCtrl]);

    function DeitPlanCtrl(CommonSvc, $location) {
            var vm = this;
            vm.route = route;
            function route(param) {
                switch (param){
                    case 'save':
                        $location.path('/deit');
                        break;
                   // case 'preview':
                        // save logic
                        // CommonSvc.set
                        /*$location.path('/register');*/
                       // $location.path('/deit/daily/preview');
                      //  break;
                    case 'edit':
                            $location.path('/deit/daily');
                            break;
                     case 'back':
                            $location.path('/deit');
                            break;

                }
            }
        }
})();
