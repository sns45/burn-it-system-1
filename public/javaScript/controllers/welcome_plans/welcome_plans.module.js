(function () {
    'use strict';
    angular.module('burnIt.welcome', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/welcome', {
                    templateUrl: '/views/welcome_plans/select-fitness-options.html',
                    controller: 'welcomeCrl'
                });
    }])
})();