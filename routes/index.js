var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



/*APIs 

Yelp API 

https://api.yelp.com/v2/search?term=food&location=Newark
Consumer Key	9Qk91VkYiK7ahH_R6hI86w
Consumer Secret	nQGgm9PYrCSGymJGQmsxtQxoQ0w
Token	JL2H21SvKZJdax6OXTbV47OeSf9Sw5FU
Token Secret	DzLhEcf97GRxACGFYY_Ts6O74No


https://trackapi.nutritionix.com/v2/natural/nutrients

Headers:


Content-Type   application/json

x-app-id  096abb16

x-app-key   41039f1fc76e5e5de6484456df0dd2b1

x-remote-user-id  096abb16


https://developer.nutritionix.com/

Application id: 096abb16
Application key: 41039f1fc76e5e5de6484456df0dd2b1

*/