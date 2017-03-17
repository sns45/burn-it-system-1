 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty = require('is-empty');

 router.post('/deit', function (req, res) {
     if (empty(req.body.query)) {
         res.send(405, "Please Search The numbe of Calories for Food");
     }
     else {
         var resObj = {
             url: "https://trackapi.nutritionix.com/v2/natural/nutrients"
             , method: 'POST'
             , json: req.body
             , headers: {
                 "Content-Type": "application/json"
                 , "x-app-id": "096abb16"
                 , "x-app-key": "41039f1fc76e5e5de6484456df0dd2b1"
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