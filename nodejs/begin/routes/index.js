var express = require('express');
var express = require('express');
var router = express.Router();
var flight = require('../flight')
var flights = require('../data')
var FlightSchema = require('../schemas/flight')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

for (var number in flight){
    flights[number] = flight(flights[number])
}

router.get ('/flight/:number',function(req, res, next){
    var number = req.param('number')
    req.session.lastNumber = number;
    if ( typeof (flights[number]) === 'undefined'){  
    res.status(404).json({Status: 'Error'});
    }
  else {
      var record = new FlightSchema(flight(flights[number]).getInformation())
      record.save(function(err){
          if (err){
              console.log(err)
              res.status(500).json({Status : 'Failure.'})
          }
          else{
              res.json({Status: 'Success.'})
          }
      })
    res.json(flight(flights[number]).getInformation());
  }
});

module.exports = router;
