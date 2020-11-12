"use strict";
//function with a return value
function add(n1, n2) {
    return n1 + n2;
}
//function without a return value (basicaly a methode)
function printResult(num) {
    console.log("printResult = " + num);
}
//Testing functions
printResult(add(3.14, 380));
//We can asign a function to variable
// let combineValue : Function = add;
//Function type in typescript
var combineValue;
combineValue = add;
console.log("CombineValue = " + combineValue(89, 5));
//Callback and how it works
function addAndHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
addAndHandle(10, 5, function (result) {
    console.log("addAndHandle = " + result);
});
