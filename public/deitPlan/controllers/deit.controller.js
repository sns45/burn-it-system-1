"use strict";

(function () {
    angular
        .module("burnIt.deitplan")
        .controller("DeitCtrl", ["CommonSvc", "$location", DeitCtrl]);

        function DeitCtrl(CommonSvc, $location) {
            var vm = this;
            vm.route = route;
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
                     case 'dailydeit':
                            $location.path('/deit/daily');
                            break;

                }
            }
        }
})();
