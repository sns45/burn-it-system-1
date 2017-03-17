 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty = require('is-empty');
 var userController = require('../controllers/user_controller');
 var mongo = require('mongodb').MongoClient;
 var assert = require('assert');

router.post('/data', function (req, res) {
    console.log(req.body);
    userController.createUser(req, function(err, userData){
       if(err){
           res.json(err);
       } else{
           res.json(userData);
       }
    });
    
});

router.get('/data', function(req, res){
   
    userController.retrieveUser(function(userData){
       if(userData){
           res.json(userData);
       } else{
           res.send(401, "data not found in mongo document");
       }
    });
});

 module.exports = router;