
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
        var reqData;
        self.setReqData = setReqData;
        self.getReqData  = getReqData;
        self.setPerson = setPerson;
        self.getPerson = getPerson;
        
        function setReqData(obj) {
            reqData = obj;
        }
    
        function getReqData() {
            return reqData;
        }
    
        function setPerson(obj) {
            person = obj;
        }

        function getPerson() {
            return person;
        }
    })
    .controller("burnCtrl", ["$scope", "$location", burnCtrl]);

function burnCtrl($scope,$location) {
};
