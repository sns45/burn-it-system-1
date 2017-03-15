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
        var food = {
                "food_name": ""
                , "numberofCal": ""
                , "thumb": ""
            };
       // var day;
        var cal;
       // var meal;
        var calories = [];
        var queryFood = {
            "query": ""
        };
        var obj = {};
        var userData;
        var week;
        (function () {
            vm.maxCal = JSON.stringify(callerData.maxCal); 
         //   day = callerData.day;
         //   meal = JSON.stringify(callerData.meal);
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
                 //   console.log(day);
                  //  console.log(meal);
                }
               // $location.path('/deit/daily');
                break;
            case 'search':
                var cal = 0;
                queryFood.query = vm.food;
                $http.post('/api/nutritionix/deit', JSON.stringify(queryFood)).then(function (response) {
                    for (var i = 0; i < response.data.foods.length; i++) {
                        if (response.data.foods[i].nf_calories == null || response.data.foods[i].nf_calories == "") {}
                        else {
                            cal = parseInt(cal) + parseInt(response.data.foods[i].nf_calories);
                            food.food_name = response.data.foods[0].food_name;
                            food.thumb = response.data.foods[0].photo.thumb;
                            food.numberofCal = parseInt(response.data.foods[i].nf_calories);
                            
                        }
                        foodArray.push(food);
                        food = {};
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
        var day = callerData.day;
        var  meal = JSON.stringify(callerData.meal);
            if (day=='Monday'){
                   if (meal.localeCompare('breakfast')){
                    
                     week.monday.breakfast = foodArray;   
                    }
                     else if (meal.localeCompare('firstSnack')){
                        week.monday.first_snack = foodArray;
                    }
                     else if (meal.localeCompare('lunch')){
                        week.monday.lunch = foodArray;
                    }
                    else if (meal.localeCompare('secondSnack')){
                        week.monday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare('diner')){
                        week.monday.diner = foodArray;
                    }
                else{}
                }
              else if (day=='Tuesday') {
                  if (meal.localeCompare('breakfast')){
                    week.tuesday.breakfast = foodArray;   
                    }
                    else if (meal.localeCompare('firstSnack')){
                        week.tuesday.first_snack = foodArray;
                    }
                   else if (meal.localeCompare('lunch')){
                        week.tuesday.lunch = foodArray;
                    }
                    else if (meal.localeCompare('secondSnack')){
                        week.tuesday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare('diner')){
                        week.tuesday.diner = foodArray;
                    }
                  else{}
              }
              else  if (day.localeCompare("Wednesday")) {
                   if (meal.localeCompare("breakfast")){
                    week.wednesday.breakfast = foodArray;   
                    }
                   else if (meal.localeCompare("firstSnack")){
                        week.wednesday.first_snack = foodArray;
                    }
                    else if (meal.localeCompare("lunch")){
                        week.wednesday.lunch = foodArray;
                    }
                    else if (meal.localeCompare("secondSnack")){
                        week.wednesday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare("diner")){
                        week.wednesday.diner = foodArray;
                    }
                  else{}
              }
                if (day.localeCompare("Thursday")) {
                   if (meal.localeCompare("breakfast")){
                    week.thursday.breakfast = foodArray;   
                    }
                    else if (meal.localeCompare("firstSnack")){
                       week.thursday.first_snack = foodArray;
                    }
                    else if (meal.localeCompare("lunch")){
                        week.thursday.lunch = foodArray;
                    }
                   else if (meal.localeCompare("secondSnack")){
                        week.thursday.second_snack = foodArray;
                    }
                   else if (meal.localeCompare("diner")){
                       week.thursday.diner = foodArray;
                    }
                    else{}
              }
                  if (day.localeCompare("Friday")) {
                   if (meal.localeCompare("breakfast")){
                    week.friday.breakfast = foodArray;   
                    }
                    else if (meal.localeCompare("firstSnack")){
                        week.friday.first_snack = foodArray;
                    }
                    else if (meal.localeCompare("lunch")){
                        week.friday.lunch = foodArray;
                    }
                    else if (meal.localeCompare("secondSnack")){
                        week.friday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare("diner")){
                       week.friday.diner = foodArray;
                    }
                      else{}
              }
              else  if (day.localeCompare("Saturday")) {
                   if (meal.localeCompare("breakfast")){
                    week.saturday.breakfast = foodArray;   
                    }
                    else if (meal.localeCompare("firstSnack")){
                        week.saturday.first_snack = foodArray;
                    }
                    else if (meal.localeCompare("lunch")){
                        week.saturday.lunch = foodArray;
                    }
                    else if (meal.localeCompare("secondSnack")){
                        week.saturday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare("diner")){
                        week.saturday.diner = foodArray;
                    }
                  else{}
              }
              else  if (day.localeCompare("Sunday")) {
                   if (meal.localeCompare("breakfast")){
                    week.sunday.breakfast = foodArray;   
                    }
                    else if (meal.localeCompare("firstSnack")){
                        week.sunday.first_snack = foodArray;
                    }
                    else if (meal.localeCompare("lunch")){
                        week.sunday.lunch = foodArray;
                    }
                    else if (meal.localeCompare("secondSnack")){
                        week.sunday.second_snack = foodArray;
                    }
                    else if (meal.localeCompare("diner")){
                        week.sunday.diner = foodArray;
                    }
                  else{}
              }
              else{}
            meal ="";
            day = "";
            CommonSvc.setWeekData(week);
            console.log(week);
            $uibModalInstance.close();
        }
    }
})();