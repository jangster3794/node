var express = require('express');
var express = require('express');
var router = express.Router();
var flight = require('../flight')

var flight1 = flight({
    number:1,
    origin: 'LAX',
    destination: 'DCA',
    departs: '9AM',
    arrives:'4AM'
})

var flight2 = flight({
    number:2,
    origin: 'LAX',
    destination: 'PDX',
    departs: '10AM',
    arrives:'12AM'
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get ('/flight1',function(req, res, next){
  res.json(flight1.getInformation());
});
router.get ('/flight2',function(req, res, next){
    res.json(flight2.getInformation());
});

module.exports = router;
