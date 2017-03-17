 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty = require('is-empty');
 var assert = require('assert');


 router.post('/bmi', function (req, res) {
     if (empty(req.body.height.value) ||req.body.height.value==""|| empty(req.body.weight.value) || req.body.weight.value==""||empty(req.body.sex) ||req.body.sex==""|| empty(req.body.age)||req.body.age=="") {
            res.send(405, "Please make sure that the height, weight, sex and age values are entered. ");                                            
     }
     else {
         var resObj = {
             url: "https://bmi.p.mashape.com"
             , method: 'POST'
             , json: req.body
             , headers: {
                 "Content-Type": "application/json"
                 , "X-Mashape-Key": "pKLWGRrBWomshBDBVnH9yriv891rp1XeJNXjsnTwTYcJWwbLdS"
             }
         };
         request(resObj, function (error, response, body) {
             if (error) {
                 res.send(response.statusCode);
             }
             else {
                 console.log(body);
                 res.send(response.statusCode, body);
             }
         });
     }
 });
 router.get('/yelp/:item/location/:zipcode', function (req, res) {
     if (empty(req.params.zipcode) || req.params.zipcode == "" || req.params.zipcode == null) {
         res.send(405, "please ensure to specified your zipcode");
     }
     else {
         var resObj = {
             url: "https://api.yelp.com/v3/businesses/search?term=" + req.params.item + "&location=" + req.params.zipcode
             , method: 'GET'
             , json: req.body
             , headers: {
                 "Authorization": "Bearer 4rk5uVOv9ciUB_wO_QLMAoFavl87jU2lLl1bcMgkzwPjTly9cpy-GeI93DEA0TWAoTb9lbUEV7g9Yfn1IPvRbO0ouLGFLl3fsqK8m-YKKs99NX2BwS9FFbcsk2PDWHYx"
             }
         };
         request(resObj, function (error, response, body) {
             if (error) {
                 res.send(response.statusCode);
             }
             else {
                 res.send(response.statusCode, body);
             }
         });
     }
 });


 module.exports = router;