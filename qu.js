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

/**
 * write a function, multiplyEvens, that can be
called with any number of arguments and returns
the product of the even arguments
• do first using the arguments object
• then using …rest parameter
multiplyEvens(1, 6, 3, 4, 17, 2) → 48
 */

// function multiplyEvens(){
//     let evenProduct = 1;
//     for(const num of arguments){
//         if(num%2===0){
//             evenProduct = evenProduct*num;
//         }
//     }
//     return evenProduct;

// }
// console.log(multiplyEvens(1, 6, 3, 4, 17, 2));

//second way

function multiplyEvens(...argsArray){
    let evenProduct = 1;
    for(const num of argsArray){
        if(num%2===0){
            evenProduct = evenProduct*num;
        }
    }
    return evenProduct;

}
console.log(multiplyEvens(1, 6, 3, 4, 17, 2));


let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

//Use the map function to map the people array to the following:
const mappedArr = people.map(person => ({}))
[{ fullName: "John Smith", age: 10 },
{ fullName: "Pete Hunt", age: 20 },]