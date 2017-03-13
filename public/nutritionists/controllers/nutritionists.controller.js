
"use strict";

(function () {
    angular
        .module("burnIt.nutritionists")
        .controller("NutritionistsCtrl", ["CommonSvc", "$location","$http", NutritionistsCtrl]);
     
    function NutritionistsCtrl(CommonSvc, $location,$http) {
        var vm = this;
        vm.route = route;
        var url = "";
        var data ;
        (function () {  
           //vm.rating ="./../document/stars/2Stars.jpg";
          //  vm.rating =$location(2Stars.jpg);
        })();
        
        (function () {  
            
            for (var x=0; x<2; x++){
                if(x < 1){
                  url = "/api/main/yelp/nutritionists/location/" + CommonSvc.getPersonData()['zip_code'] ;
                }
                else {
                    if (url==null|| url==""){ 
                        console.log("THE URL IS NULL");
                    }
                    else{
                $http.get(url).then(function (response) {
               
                //ratingfunc(response.data.businesses[0].rating)      
                vm.mame =  response.data.businesses[0].name;
                vm.address = response.data.businesses[0].location.display_address[0]+" "+response.data.businesses[0].location.display_address[1];
                vm.phonenumber = response.data.businesses[0].display_phone;
                return response;
                }); 
                    }
                
                }
            }
                
        })();
     
        function route(param) {
            switch (param){
                case 'Back':
                    $location.path('/planning');
                    break;
                case 'Save':
                    $location.path('/planning');
                    break;
            }
        }
        
        function ratingfunc(rate){
            
            if(rate ==5){
                vm.rating="document/stars/5Stars.jpg";
            }
            if(rate ==4.5){
                vm.rating="document/stars/4.5Stars.jpg";
            }
            if(rate ==4){
                vm.rating="document/stars/4Stars.jpg";
            }
            if(rate ==3.5){
                vm.rating="document/stars/3.5Stars.jpg";
            }
            if(rate ==3){
                vm.rating="document/stars/3Stars.jpg";
            }
            if(rate ==2.5){
                vm.rating="document/stars/2.5Stars.jpg";
            }
            if(rate ==2){
                vm.rating="document/stars/2Stars.jpg";
            }
        }

    }
})();
