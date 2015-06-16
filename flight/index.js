/**
 * Created by Kavy on 6/16/2015.
 */
//using as a base for new objects

//define two variables that are local to the module
var count = 0, destinations = [];

var Flight = function () {

    //the variables for this class
    this.data = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive: null
    };

    //function to fill data in using info
    this.fill = function (info) {
        //only get the properties that we pass in at the top
        for (var prop in this.data) {
            if (this.data[prop] !== 'undefined') {
                this.data[prop] = info[prop];
            }//end if
        }//end for

        //declare several functions
        this.triggerDepart = function () {
            this.data.actualDepart = Date.now();
        };
        this.triggerArrive = function () {
            this.data.actualArrive = Date.now();
        };
        this.getInformation = function () {
            return this.data; //return the array of values that get set
        };

    };//end function
};//end Flight class

exports.create = function(info) {
    var instance = new Flight();
    instance.fill(info);

    //increment count after filling information
    count++;
    //checking to make sure that we don't already have te destination in the array
    if (destinations.indexOf(info['destination']) < 0){
        destinations.push(info['destination']);
    }//end if

    return instance;
}

//return the current count
exports.getCount = function () {
    return count;
}

//return the destinations array
exports.getDestinations = function () {
    return destinations;
}