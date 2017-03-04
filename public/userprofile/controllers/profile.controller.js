"use strict";

(function () {
    angular
        .module("burnIt.profile")
        .controller("ProfileCtrl", ["CommonSvc", "$location", ProfileCtrl]);

    function ProfileCtrl(CommonSvc, $location) {
        var vm = this;

     /*   vm.route = route;
        function route(param) {
            switch (param){
                case 'Back':
                    $location.path('/planning');
                    break;
                case 'Save':
                    // save logic
                    // CommonSvc.set
                    $location.path('/planning');
                    break;
            }
        }*/

//        (function() {
//            if (CommonSvc.getPerson() === undefined) {
//                $location.path('Start')
//            }
//        })
//
    }
})();
