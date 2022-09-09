/* eslint-disable*/;
"use strict";
//module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams }
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply }; //add all of your function names here that you need for the node mocha tests
*/


//############################# QUESTION 1############################
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;

    }
}


//########################### QUESTION 2A #############################

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}

//################################## QUESTION 2B ####################################

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const number of arr) {
        tot *= number;
    }

    return tot;

}


//########################################QUESTION 3 ##################################

/**
 * 
 * @param {array} arr array of wards
 * @returns return the length of the longest word
 */
function findLongestWord(arr) {
    let txt = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > txt.length) {
            txt = arr[i];
        }
    }
    return txt.length;
}

//#################################### QUESTION 4 ########################################

/**
 * 
 * @param {array} array contains characters as string
 * @returns return reverse of array
 */
function reverseArray(array) {
    let arr = [];
    for (const value of array) {
        arr.unshift(value);
    }

    return arr;
}
/**
 * 
 * @param {array} array input as array
 * @returns return a reverse
 */
function reverseArrayInPlace(array) {
    let arr1 = array.splice(0);
    for (let i = arr1.length - 1; i >= 0; i--) {
        array.push(arr1[i]);
    }
    return array;

}

//####################################### QUESTION 5 #############################################

/**
 * Write a function, scoreExams, that takes an array of arrays of student answers and an array of
the correct answers. It should compare each student’s answers against the correct answers and
return an array holding the scores of each student. The score for each student is a count of the
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]
 */
/**
 * 
 * @param {array} arr The scores array;
 * @param { arr } arr1 The answer array 
 * @returns { array } The array holding scores;
 */
function scoreExams(arr, arr1) {

    const scores = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count = 0;

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr1[j]) {
                count++;
            }
        }

        scores.push(count);
    }

    return scores;
}


//########################################## QUESTION 6 ###################################

/**
 * Write a function that takes two integers as inputs and returns a 2-dimensional array containing
sequential numbers across each row as follows:
console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
console.log("expect [ [1], [2]]: ", generateArray(2, 1));
 */
/**
 * 
 * @param {int } value1 The firts value; 
 * @param {int } value2 The second value;
 * @returns { array } The array odf arrays;
 * */
function generateArray(value1, value2) {
    let arr1 = [], arr2 = [];

    for (let i = 1; i <= value1 * value2; i++) {
        arr1[i] = i;
    }

    for (let j = 1; j <= value1 * value2; j += value2) {
        arr2.push(arr1.slice(j, j + value2));
    }

    return arr2;
}


let a = ["hello", "gdgdhfhfhf", "rescs"];
console.log(findLongestWord(a));

console.log("expect max 3", maxOfThree(111, 333, 222));
console.log("expect sum 10", sum([1, 2, 3, 4]));
console.log("expect mult 60", multiply([2, 3, 10]));

console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3, 3));
console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2, 3));
console.log("expect [ [1], [2]]: ", generateArray(2, 1));