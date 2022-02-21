"use strict";
exports.__esModule = true;
var user = {
    name: "Max",
    age: 18,
    gender: 'Male'
};
var sum = function (a, b) {
    return a + b;
};
var showSum = function (a, b) {
    console.log(a + b);
};
var incAge = function (user, inc) {
    user.age += inc;
    return user;
};
console.log(sum(44, 22));
showSum(2, 3);
incAge(user, 2);
console.log(user);
