"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {String} str the first character of a string is changed in uppercase
 * @returns return a string start with uppercase letter
 */
function ucFirst(str) {
    let upStr = str.slice(0, 1).toUpperCase() + str.slice(1);
    return upStr;

}
console.log(ucFirst("hello"));
/**
 * 
 * @param {string} str a text has a spam word need to be detected
 * @returns return true if there is a spam , false if there is not
 */
function checkSpam(str) {
    const newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
}

/**
 * 
 * @param {string} str a string need to be modified
 * @param {*} maxlength maximum length of text
 * @returns return a new text afer modifying
 */
function truncate(str, maxlength) {
    if (str.length >= maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    } else {
        return str;
    }

}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }

    }
    return maxSum;
}
let arr = [-1, -2];
console.log(getMaxSubSum(arr));
/**
 * 
 * @param {string} str a string with "-"
 * @returns return a new string after removing "-"
 */
function camelize(str) {
    if (str === "") {
        return "";
    } else if (str.includes("-")) {
        let arr = str.split("-");
        let newText = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let newWord = arr[i].slice(1);
            newText = newText + (arr[i][0].toUpperCase() + newWord);
        }
        return newText;

    } else {
        return str;
    }
}

/**
 * 
 * @param {string} str input can be a string that will converted to number 
 * @returns return a number
 */
function extractCurrencyValue(str) {
    const txt = str.slice(1);
    return parseInt(txt);

}
