(function(){
    var app = angular.module("burnIt.planning");
    
       app.service("PlanningDataSvc", function($http){
           var self = this;
           
           self.getBmi = function(userInfo){
             return $http.post('/api/main/bmi', userInfo).then(function(response){
                 
                 return response;
             })  
           };
           
       })
     
})();