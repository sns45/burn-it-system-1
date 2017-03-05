(function () {
   var app = angular
        .module("burnIt.nutritionists");
    
    app.service("NutritionistsSvc", function($http){
        
        var self = this;
        
        self.readFoods = function(userData, type){
            return $http.post("/api/nutritionists/nutritionists",userData)
                .then(function(response){
                return response;
            });
        };
        
    })
    
})();