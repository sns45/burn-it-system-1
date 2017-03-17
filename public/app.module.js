
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
        var person ;
        var userData;
        var weekData = {};
        self.setPerson = setPerson;
        self.getPerson = getPerson;
        
        self.setUserData = setUserData;
        self.getUserData = getUserData;
     
        self.setWeekData = setWeekData;
        self.getWeekData  = getWeekData;
    
       function setUserData(obj) {
            userData = obj;
        }
    
        function getUserData() {
            return userData;
        }
         
       function setPerson(obj) {
            person = obj;
        }
    
        function getPerson() {
            return person;
        }
    function setWeekData(obj) {
            weekData = obj;
        }
    
        function getWeekData() {
            return weekData;
        }
    })
    .controller("burnCtrl", ["$scope", "$location", burnCtrl]);

function burnCtrl($scope,$location) {
};
