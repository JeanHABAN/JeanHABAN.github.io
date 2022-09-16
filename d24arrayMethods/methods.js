"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let arr1 = arr.filter((num) => (num >= a && num <= b));
    return arr1;
}


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1);
        }

    }
}


function Calculator() {
    this["*"] = (a, b) => +a * +b,
    this["+"] = (a, b) => +a + +b,
    this["**"] = (a, b) => (+a) ** (+b),
    this["-"] = (a, b) => +a - +b,

    this.calculate = function (str) {
        let arr = str.split(" ");
        for (let prop in this) {
          if (arr[1] === prop) {
            return this[prop](arr[0], arr[2]);
          };
        };
      },
    
      this.addMethod = function (name, func) {
        for (let prop in this) {
          if (name === prop) {
            func = this[prop]();
          };
        };
      }
}

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
          
}