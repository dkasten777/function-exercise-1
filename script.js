"use strict";


function getAreaOfCircle (radius) {
    return (radius*radius*3.14159)
}
function getCircumferenceOfCircle (radius) {
    return (2*3.14159*radius)
}
function getAreaOfSquare (side) {
    return (side ** 2)
}
function getAreaOfTriangle (base, height) {
    return ((base*height) / 2);
}    

console.log (getAreaOfCircle (30));
console.log (getCircumferenceOfCircle(20));
console.log (getAreaOfSquare(8));
console.log (getAreaOfTriangle (10, 4));

