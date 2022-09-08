
"use strict";
const assert = require("assert");
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
/* import from functions.js module */
const functionMod = require("./d1w3Functions.js");
const isVowel = functionMod.isVowel;
const computeSalesCommission = functionMod.computeSalesCommission;
const compoundInterest = functionMod.compoundInterest;
const calcDownPayment = functionMod.calcDownPayment;
const sumDigits = functionMod.sumDigits;
const multDigits = functionMod.multDigits;
const convertFahrenheit = functionMod.convertFahrenheit;
const calcDistance = functionMod.calcDistance;
describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});

//##########################QUESTION NO 2##############
describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});

//######################QUESTION NO 3##################

describe("test of CompoundInterest", function () {
  it("tests balance of 100, 10, 1", function () {
    assert.equal(compoundInterest(100, 10, 1).toFixed(2), 110.47);
  });
  it("tests balance of 10000, 5, 10", function () {
    assert.equal(compoundInterest(10000, 5, 10).toFixed(2), 16470.09);
  });

});


//####################### QUESTION 4#######################
describe("test of calcDownPayment", function () {
  it("tests down payment of 40000", function () {
    assert.strictEqual(calcDownPayment(40000), 2000);
  });
  it("tests down payment of 50000", function () {
    assert.strictEqual(calcDownPayment(50000), 2500);
  });
  it("tests down payment of 100000", function () {
    assert.strictEqual(calcDownPayment(100000), 7500);
  });
  it("tests down payment of 250000", function () {
    assert.strictEqual(calcDownPayment(250000), 25000);
  });

});

// sum digits
describe("test of sumDigits", function () {
  it("tests sumDigits of 1234", function () {
    assert.strictEqual(sumDigits(1234), 10);
  });
  it("tests sumDigits of 102", function () {
    assert.strictEqual(sumDigits(102), 3);
  });
  it("tests sumDigits of 102", function () {
    assert.strictEqual(sumDigits(8), 8);
  });
});

//multiplication of digits
describe("test of multDigits", function () {
  it("tests multDigits of 1234", function () {
    assert.strictEqual(multDigits(1234), 24);
  });
  it("tests multDigits of 102", function () {
    assert.strictEqual(multDigits(102), 0);
  });
  it("tests multDigits of 102", function () {
    assert.strictEqual(multDigits(8), 8);
  });
});

// convert fahrenheit
describe("test of  convertFahrenheit", function () {
  it("tests  convertFahrenheit of 32", function () {
    assert.equal(convertFahrenheit(32), 0);
  });
  it("tests convertFahrenheit of -17.7778", function () {
    assert.equal(convertFahrenheit(0).toFixed(4), -17.7778);
  });
  it("tests convertFahrenheit of 100", function () {
    assert.equal(convertFahrenheit(212), 100);
  });
  it("tests convertFahrenheit of -17.7778", function () {
    assert.equal(convertFahrenheit(100).toFixed(4), 37.7778);
  });
});

// calculate distance
describe("test of  calcDistance", function () {
  it("tests  calcDistance of (0, 0, 5, 5)", function () {
    assert.equal(calcDistance(0, 0, 5, 5), 7.07);
  });
});