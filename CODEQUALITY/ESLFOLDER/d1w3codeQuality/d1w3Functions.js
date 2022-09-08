/* eslint-disable*/;
"use strict";
module.exports = { isVowel, computeSalesCommission,compoundInterest,calcDownPayment,sumDigits,
  multDigits, convertFahrenheit, calcDistance};

/**
 * 
 * @param {string} vowel is a character  
 * @returns return true if it is vowel else return false
 */

function isVowel(vowel){
  let vow = vowel.toLowerCase();
   if(vow=="a" || vow=="e" || vow=="i" || vow=="o" || vow=="u" ){
       return true;
   }
return false;
}
//##########################QUESTION NO 2######################################

/**
 * 
 * @param {boolean} toConfirm if it is true means that salesman is salaried, else salesman is not salaried 
 * @param {Number} sales have passed to if condition, zero commission if sales is less than 300, 1% commission if sales is between 
 *                  300 and 500 inclusive
 * @returns return commission after verifying a condition
 */

 
 function computeSalesCommission(toConfirm, sales) {

  let commission = null;
  if (toConfirm === true) {
      if (sales < 300) {
          commission = 0;
          return commission;

      }
      else if (sales >= 300 && sales <= 500) {
          commission = sales * 0.01;
          return commission;
      }
      else {
          commission = (sales - 500) * 0.02 + 500 * 0.01;
          return commission;
      }

  } else {
      if (sales < 300) {
          commission = 0;
          return commission;

      }
      else if (sales >= 300 && sales <= 500) {
          commission = sales * 0.02;
          return commission;
      } else {
          commission = (sales - 500) * 0.03 + 500 * 0.02;
          return commission;
      }

  }

}
// helper function is used to decide a category of salesman
function toConfirm() {
  let conf = confirm("are you salaried?");
  return conf;
}

//##############################QUESTION NO 3####################
/**
 * 
 * @param {Number} initialAmt initial balance on saving account
 * @param {Number} annualInterest annual interest rate
 * @param {Number} numYears number of years
 * @returns 
 */

function compoundInterest(initialAmt, annualInterest, numYears) {
  let monthsInYears = numYears * 12;
  let monthlyRate = annualInterest / 1200;
  let balance = initialAmt;
  for (let i = 1; i <= monthsInYears; i++) {
      let monthlyAmount = monthlyRate * balance;
      balance = (balance + monthlyAmount);

  }
  return balance;
}

//#######################QUESTION 4 ########################
//down payment
/**
 * 
 * @param {*} costHouse is the input of the function 
 * @returns  return down payment required according the cost of house
 */
function calcDownPayment(costHouse) {
    let downPayment = 0;
    if (costHouse < 50000) {
        downPayment = costHouse * 0.05
    }
    else if (costHouse >= 50000 && costHouse < 100000) {
        downPayment = 2500 + (costHouse - 50000) * 0.1;
    }
    else if (costHouse >= 100000 && costHouse < 200000) {
        downPayment = 7500 + (costHouse - 100000) * 0.15;
    }
    else {
        downPayment = 20000 + (costHouse - 200000) * 0.1;
    }
    return downPayment;
}

//sum of digits
/**
 * 
 * @param {Number} num should be a number 
 * @returns a sum of digits of that number
 */
function sumDigits(num) {
  let sum = 0;
  while (num !== 0) {
      let digit = num % 10;
      sum = sum + digit;
      num = Math.floor(num / 10);
  }
  return sum;
}

// multiplication of digits
/**
 * 
 * @param {Number} num should be a number
 * @returns return a multiplication of digits
 */
function multDigits(num) {
  let mult = 1;
  while (num !== 0) {
      let digit = num % 10;
      mult = mult * digit;
      num = Math.floor(num / 10);
  }
  return mult;
}

//ConvertFahrenheit

function convertFahrenheit(Fahrenheit) {
  let degreeCelsius = (Fahrenheit - 32) * 5 / 9;
  return degreeCelsius;

}

// calculate a distance

function calcDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1)*(x2 - x1)+ (y2 - y1)*(y2 -y1));
  return distance.toFixed(2);
}