 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty  = require('is-empty');


 router.post('/bmi', function(req, res){
       if(empty(req.body.height.value)  || empty(req.body.weight.value)  || empty(req.body.sex)  ||  empty(req.body.age )){
           
            res.send(405, "Please make sure that the height, weight, sex and age values are entered. ");                                            
       }
        else{
            var resObj ={
        url: "https://bmi.p.mashape.com",
        method:'POST',
        json: req.body,
        headers : {
            "Content-Type":  "application/json",
            "X-Mashape-Key": "pKLWGRrBWomshBDBVnH9yriv891rp1XeJNXjsnTwTYcJWwbLdS"
          }
       };
       request(resObj,function(error, response,body){
       if(error){
           res.send(response.statusCode);
       }else{
           console.log(body);
           res.send(response.statusCode, body);
       }   
    });
        }     
 });
module.exports = router;

