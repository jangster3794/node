var flight = require('./flight')

var pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
}

var pl = flight(pdxlax)
pl.triggerDepart()

var ausdca = {
    number : 382,
    origin : 'AUS',
    destination: 'DCA'
}

var ad = flight(ausdca)

console.log(ad.getInformation())
console.log(pl.getInformation())