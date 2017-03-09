(function(){
    var app = angular.module("burnIt.planning");
    
       app.service("PlanningDataSvc", function($http){
           var self = this;
           
           self.bmiObject = [];
           
           self.getBmi = function(userInfo){
             return $http.post("/api/main/bmi", 
                userInfo).then(function(response){
                 console.log(response);
                 return response;
             });  
           }
           self.setBmiObject = function(bmi){
               this.bmiObject = bmi;
           }
           self.getBmiObject = function(){
               return this.bmiObject;
           }
       });
     
})();