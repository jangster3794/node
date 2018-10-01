var express = require('express');
var express = require('express');
var router = express.Router();
var flight = require('../flight')
var flights = require('../data')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

for (var number in flight){
    flights[number] = flight(flights[number])
}

router.get ('/flight/:number',function(req, res, next){
    var number = req.param('number')
    if ( typeof (flights[number]) === 'undefined'){  
    res.status(404).json({Status: 'Error'})
    console.log('Yes')
    }
  else {
      console.log(flights[number])
    res.json(flight(flights[number]).getInformation());
  }
});

module.exports = router;
