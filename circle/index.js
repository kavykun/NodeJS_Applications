/**
 * Created by Kavy on 6/16/2015.
 */
var PI = Math.PI;
var test;
var test2;

exports.setNumber = function (n) {
    test = n;
};

exports.setNumber2 = function (n) {
    test2 = n;
};

exports.getNumber = function () {
    return {
        test: test,
        test2: test2
    };
};

exports.area = function (r) {
    return PI * r * r;
};

exports.circumference = function (r) {
    return 2 * PI * r;
};