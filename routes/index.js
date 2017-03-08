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

API DOC https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.73n49tgew66c
https://developer.nutritionix.com/

Application id: 096abb16
Application key: 41039f1fc76e5e5de6484456df0dd2b1
Example JSON Request 

{
 "query":"for breakfast i ate 2 eggs, bacon, and french toast",
 "timezone": "US/Eastern"
}


ideal weigh API

https://bmi.p.mashape.com
'X-Mashape-Key: pKLWGRrBWomshBDBVnH9yriv891rp1XeJNXjsnTwTYcJWwbLdS' \
'Content-Type: application/json' \
Example JSON Request POST
{"weight":{"value":"85.00","unit":"kg"},"height":{"value":"170.00","unit":"cm"},"sex":"m","age":"24","waist":"34.00","hip":"40.00"}

*/