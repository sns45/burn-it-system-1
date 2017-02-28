(function () {
    'use strict';
    angular.module('burnIt.main', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/main', {
                    templateUrl: 'views/main.html',
                    controller: 'mainCrl'
                });
    }])
})();