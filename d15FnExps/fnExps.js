"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(num){
    return num*2;

}

/**
 * @returns {number} 100 times the input
 */
 function times100(num){
    return num*100;

 }

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(testArray, double){
    let newArr = [];
    for(const val of testArray){
        newArr.push(double(val));
    }
    return newArr;

}

//$$$$$$$$$$$$$$$$$$$$$$

function myMap(testArray, times100){
    let newArr = [];
    for(const val of testArray){
        newArr.push(times100(val));
    }
    return newArr;

}
 let ff = [34,2,12,23];
 console.log(double(5));
 console.log(myMap(ff, times100));
 console.log(myMap(ff, double));