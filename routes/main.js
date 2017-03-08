 var express = require('express');
 var router = express.Router();
 var request = require("request");


 router.post('/bmi', function(req, res){
 
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
           res.send(response.statusCode, body);
       }   
    });     
 });
module.exports = router;

