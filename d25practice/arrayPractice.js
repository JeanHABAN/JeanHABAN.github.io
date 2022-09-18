"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    const newArr = arr.map(item => {
        let newObject = {
            age: item.age * 2,
            name: item.name
        }
        return newObject;
    });
    return newArr;
}


function filterEven(arr){
    return arr.filter(num =>num%2==0);

}

function filterOver10(arr) {
    return arr.filter(item => item.age > 10);

}

function findEvenNum(arr){
    return arr.find(count =>count%2==0, 0);

}

function findEvenAge(arr){
    return arr.find(item => item.age%2==0);

}

function includesEvenNum(arr){
    return arr.includes(item => item%2===0);

}

function includesEvenAge(arr){
    return arr.includes(findEvenAge(arr));

}

