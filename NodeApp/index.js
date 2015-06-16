/**
 * Created by Kavy on 6/16/2015.
 */
//example for getters and setters
var number, origin, destination;

//export function
exports.setNumber = function(num) {
    number = num;
};//end setNumber

exports.setOrigin = function(o) {
    origin = o;
};//end setOrigin

exports.setDestination = function(d) {
    destination = d;
};//end setDestination

//getting the data
exports.getInfo = function() {
    return {
        number: number,
        origin: origin,
        destination: destination
    };
};//end getInfo