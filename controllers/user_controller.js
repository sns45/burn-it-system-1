var UserModel = require('../models/user').UserModel;

/*module.exports.retrieveUser = functon() {
    
    UserModel.find({
        
    }, function (err, data){
        if(err){
            console.error(err);
        }else {
            console.log(data)
        }
    })
}*/

module.exports.createUser = function (req, cb){
    UserModel.create(req.body, cb);
}