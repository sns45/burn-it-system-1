
angular
    .module("burnIt", [
    "burnIt.main",
    "burnIt.planning",
    "burnIt.nutritionists",
    "burnIt.workout",
    "burnIt.login",
    "burnIt.profile",
    "burnIt.deitplan",
    "burnIt.trackfood"
    ])
    .service("CommonSvc", function () {
        var self = this;
        var person;
        self.setPerson = setPerson;
        self.getPerson = getPerson;

        function setPerson(obj) {
            person = obj;
        }

        function getPerson() {
            return person;
        }
    })
    .controller("burnCtrl", ["$scope", burnCtrl]);

function burnCtrl($scope) {
};
