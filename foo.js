var circle = require('./circle');

circle.setNumber('2');
circle.setNumber2('4');
console.log(circle.getNumber());
console.log( 'The area of a circle of radius 4 is '
           + circle.area(4))