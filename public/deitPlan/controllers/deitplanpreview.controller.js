"use strict";

(function () {
    angular
        .module("burnIt.deitplan")
        .controller("DeitPlanPreviewCtrl", ["CommonSvc", "$location", DeitPlanPreviewCtrl]);

   function DeitPlanPreviewCtrl(CommonSvc, $location) {
            var vm = this;
            vm.route = route;
            function route(param) {
                switch (param){
                    case 'save':
                            $location.path('/deit/daily');
                            break;
                    case 'delete':
                        // save logic
                        // CommonSvc.set
                            $location.path('/deit/daily/preview');
                            break;
                    
                }
            }
        }
})();