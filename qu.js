"use strict";

/**
 * Write a function, smash, that uses map and destructuring in parameters of the
 *  callback function. Remember that you need () around destructuring brackets for
 * an object if you do not have let or const.

const bar = [{x:1, y:2}, {x:10, y:4}]
console.log("expect [3, 14]:", smash(bar));
 */
const bar = [{x:1, y:2}, {x:10, y:4}]

function smash(arr){
    return arr.map(({x,y})=>x+y);
}
console.log("expect [3, 14]:", smash(bar));