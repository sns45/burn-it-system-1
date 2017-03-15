"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("DeitPlanCtrl", ["CommonSvc", "$location", "$http", "callerData", "$uibModal", "$uibModalInstance", DeitPlanCtrl]);

    function DeitPlanCtrl(CommonSvc, $location, $http, callerData, $uibModal, $uibModalInstance)  {
        var vm = this;
        vm.close = close;
        vm.route = route;
        vm.totalCal = 0;
        vm.numCal = 0;
        var foodArray =[];
        var food ;/*= {
                "food_name": ""
                , "numberofCal": ""
                , "thumb": ""
            };*/
        var cal;
        var calories = [];
        var queryFood = {
            "query": ""
        };
        var obj = {};
        var userData;
        var week;
        var day ;
        var meal;
        (function () {
            vm.maxCal = JSON.stringify(callerData.maxCal); 
           day = callerData.day;
           meal = callerData.meal;
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getUserData() == undefined) {
                        console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    }
                    else {
                        userData = CommonSvc.getUserData();
                       
                    }
                }
            }
        })();
        
        (function () {  
           $http.get('../../documents/objects/weekObject.json').then(function (response) {
                   week = response.data;  
                        });         
            })();

        function route(param) {
            switch (param) {
            case 'add':
                var pretotal = vm.totalCal + vm.numCal;
                if (pretotal >= vm.maxCal) {
                    window.alert("You reatch the Maximum number of Calories");
                    
                }
                else {
                    vm.totalCal = pretotal;
                    console.log(food);
                    console.log(day);
                    console.log(meal);
                    
                    for(var i=0 ; i<15; i++){
                        if (day==='Monday'){
                   if (meal==='breakfast'){
                   
                     week.monday.breakfast.push(food);
                       break;
                    }
                     else if (meal=== 'firstSnack'){
                        week.monday.first_snack.push(food);
                         break;
                    }
                     else if (meal==='lunch'){
                        week.monday.lunch.push(food);
                         break;
                    }
                    else if (meal=== 'secondSnack'){
                        week.monday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                        week.monday.diner.push(food);
                        break;
                    }
                else{break;}
                }
              else if (day==='Tuesday'){
                   console.log("I am here");
                  if (meal==='breakfast'){
                    week.tuesday.breakfast.push(food); 
                      break;
                    }
                    else if (meal=== 'firstSnack'){
                        week.tuesday.first_snack.push(food);
                        break;
                    }
                   else if (meal==='lunch'){
                        week.tuesday.lunch.push(food);
                       break;
                    }
                    else if (meal=== 'secondSnack'){
                        week.tuesday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                        week.tuesday.diner.push(food)
                        break;
                    }
                  else{break;}
              }
              else  if (day === 'Wednesday') {
                   if (meal==='breakfast'){
                    week.wednesday.breakfast.push(food); 
                       break;
                    }
                   else if (meal=== 'firstSnack'){
                        week.wednesday.first_snack.push(food);
                       break;
                    }
                    else if (meal==='lunch'){
                        week.wednesday.lunch.push(food);
                        break;
                    }
                    else if (meal=== 'secondSnack'){
                        week.wednesday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                        week.wednesday.diner.push(food);
                        break;
                    }
                  else{break;}
              }
                if (day=== 'Thursday') {
                  if (meal==='breakfast'){
                    week.thursday.breakfast.push(food); 
                       break;
                    }
                    else if (meal=== 'firstSnack'){
                       week.thursday.first_snack.push(food);
                        break;
                    }
                    else if (meal==='lunch'){
                        week.thursday.lunch.push(food);
                        break;
                    }
                   else if (meal=== 'secondSnack'){
                        week.thursday.second_snack.push(food);
                       break;
                    }
                   else if (meal==='diner'){
                       week.thursday.diner.push(food);
                       break;
                    }
                    else{break;}
              }
                  if (day==='Friday') {
                   if (meal==='breakfast'){
                    week.friday.breakfast.push(food); 
                       break;
                    }
                    else if (meal=== 'firstSnack'){
                        week.friday.first_snack.push(food);
                        break;
                    }
                    else if (meal==='lunch'){
                        week.friday.lunch.push(food);
                        break;
                    }
                   else if (meal=== 'secondSnack'){
                        week.friday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                       week.friday.diner.push(food);
                        break;
                    }
                      else{break;}
              }
              else  if (day==='Saturday') {
                   if (meal==='breakfast'){
                    week.saturday.breakfast.push(food); 
                       break;
                    }
                    else if (meal=== 'firstSnack'){
                        week.saturday.first_snack.push(food);
                        break;
                    }
                    else if (meal==='lunch'){
                        week.saturday.lunch.push(food);
                        break;
                    }
                   else if (meal=== 'secondSnack'){
                        week.saturday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                        week.saturday.diner.push(food);
                        break;
                    }
                  else{break;}
              }
              else  if (day==='Sunday') {
                   if (meal==='breakfast'){
                    week.sunday.breakfast.push(food);  
                       break;
                    }
                    else if (meal=== 'firstSnack'){
                        week.sunday.first_snack.push(food);
                        break;
                    }
                    else if (meal==='lunch'){
                        week.sunday.lunch.push(food);
                        break;
                    }
                    else if (meal=== 'secondSnack'){
                        week.sunday.second_snack.push(food);
                        break;
                    }
                    else if (meal==='diner'){
                        week.sunday.diner.push(food);
                        break;
                    }
                  else{
                      break;
                  }
              }
              else{break;}
                        
                    }
                    
                   
                console.log(week);
                }
                break;
            case 'search':
                var cal = 0;
                queryFood.query = vm.food;
                $http.post('/api/nutritionix/deit', JSON.stringify(queryFood)).then(function (response) {
                    for (var i = 0; i < response.data.foods.length; i++) {
                        if (response.data.foods[i].nf_calories == null || response.data.foods[i].nf_calories == "") {}
                        else {
                            food = {}
                            cal = parseInt(cal) + parseInt(response.data.foods[i].nf_calories);
                            food.food_name = response.data.foods[0].food_name;
                            food.thumb = response.data.foods[0].photo.thumb;
                            food.numberofCal = parseInt(response.data.foods[i].nf_calories);
                            break;
                        }
                        //foodArray.push(food);
                        //food = {};
                    }
                    if (cal >= vm.maxCal) {
                        window.alert("You reatch the Maximum number of Calories");
                    }
                    else {
                        vm.numCal = parseInt(cal);
                    }
                });
                break;
            }
        }
        function close() { 
            
            CommonSvc.setWeekData(week);
            console.log(week);
            $uibModalInstance.close();
        }
    }
})();