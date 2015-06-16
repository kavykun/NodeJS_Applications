/**
 * Created by Kavy on 6/16/2015.
 */
var flight = require('./NodeApp');

flight.setOrigin('LAX');
flight.setDestination('DCA');
flight.setNumber(462);

console.log(flight.getInfo());

var anotherFlight = require('./NodeApp');

//still going to refere to the three variables above
console.log(anotherFlight.getInfo());


