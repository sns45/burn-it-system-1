var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    profile: {
        first_name: String
        , last_name: String
        , user_name: String
        , age: String
        , height: String
        , weight: String
        , gender: String
        , email: String
        , password: String
        , address: String
        , phone_number: String
        , zipcode: String
        , photo: {
             data: Buffer, contentType: String 
         }
    }
    , planning: {
        status: String
        , risk: String
        , current_weigth: String
        , ideal_weight: String
    }
    , nutritionists: [
        {
            name: String
            , address: String
            , phone_number: String
		 }
	 ]
    , work_out: [
        {
            name: String
            , address: String
            , phone_number: String
		 }
    ]
    , deit: [
        {
            monday: {
                breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , tuesday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , wednesday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , thursday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , friday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , saturday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
            , sunday: {
                 breakfast: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    
                ]
                , first_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , lunch: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , second_snack: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
                , diner: [{
                    food_name : String,
                    numberofCal : Number,
                    thumb : {data: Buffer, contentType: String }
                }    ]
            }
}
	  ]
});
module.exports.UserModel = mongoose.model('usertest', UserSchema);