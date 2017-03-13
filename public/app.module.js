
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
        var reqBmi;
        var numberOfCal;
        var foodtrack;
        var personData ={"first_name":"", "last_name":"","age":"","gender":"","height":"","weight":"","zip_code":""};
    
        self.setPersonData = setPersonData;
        self.getPersonData = getPersonData;
        self.setNumberOfCal = setNumberOfCal;
        self.getNumberOfCal  = getNumberOfCal;
        self.setReqBmi = setReqBmi;
        self.getReqBmi  = getReqBmi;       
        self.setReqData = setReqData;
        self.getReqData  = getReqData;
        self.setPerson = setPerson;
        self.getPerson = getPerson;
        self.setFoodtrack = setFoodtrack;
        self.getFoodtrack = getFoodtrack;
    
    
       function setPersonData(obj) {
            personData = obj;
        }
    
        function getPersonData() {
            return personData;
        }
    
    
        function setFoodtrack(obj) {
            foodtrack = obj;
        }
    
        function getFoodtrack() {
            return foodtrack;
        }  
        function setNumberOfCal(obj) {
            numberOfCal = obj;
        }
    
        function getNumberOfCal() {
            return numberOfCal;
        }
    
        function setReqBmi(obj) {
            reqBmi = obj;
        }
    
        function getReqBmi() {
            return reqBmi;
        }
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
