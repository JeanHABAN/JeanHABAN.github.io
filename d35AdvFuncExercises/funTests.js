"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr is passing array
 * @param {function} func is callback function
 * @returns 
 */
function myMap(arr, func) {
//IMPLEMENTATION NEEDED
let newArr = [];
for(const num of arr){
    newArr.push(func(num));
}
return newArr;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
let newArr = [];
for(const num of arr){
    if(func(num)){
        newArr.push(num);
    }
}
return newArr;

}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
     let current =initialValue;
    for(const num of arr){
        current = func(current, num);
    }
    return current;
    }