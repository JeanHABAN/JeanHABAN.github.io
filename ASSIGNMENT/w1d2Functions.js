 "use strict";
/**
 *1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and
number argument for salesAmount. It should return the sales commission based on following
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
first 500)
• If the salesman is not salaried then
• no ission for sales below $300
• 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
first 500)

 * define a table:
 * inputs : sales amount, salesman category
 * outputs : commission fees
 * process steps : I create helper function that will decide if salesman is salaried or not. 
 * And then this helper function will be one of the parameter of computeSalesCommission function.
 * 
 */
/**
 * 
 * @param {*} toConfirm if it is true means that salesman is salaried, else salesman is not salaried 
 * @param {*} sales have passed to if condition, zero commission if sales is less than 300, 1% commission if sales is between 
 *                  300 and 500 inclusive
 * @returns return commission after verifying a condition
 */
function computeSalesCommission (toConfirm, sales){

let commission = null;
if(toConfirm===true){
    if(sales < 300 ){
        commission = 0;
        return commission;
           
    }
    else if(sales >= 300 && sales <= 500){
        commission = sales*0.01;
        return commission;
    }
    else {
        commission = (sales - 500)*0.02 + 500*0.01;
        return commission;
    }
    
}else{
    if(sales < 300){
        commission = 0;
        return commission;
           
    }
    else if(sales >= 300 && sales <= 500){
        commission = sales*0.02;
        return commission;
    }else{
        commission = (sales - 500)*0.03 + 500*0.02;
        return commission;
    }
    
}

}
// helper function is used to decide a category of salesman
function toConfirm(){
    let conf = confirm("are you salaried?");
    return conf;
}

console.log("Expect 0 ", computeSalesCommission(true, 200));
console.log("Expect 0 ", computeSalesCommission(false, 200));
console.log("Expect 3 ",computeSalesCommission(true, 300));
console.log("Expect 6 ",computeSalesCommission(false, 300));
console.log("Expect 65 ",computeSalesCommission(true, 3500));
console.log("Expect 100",computeSalesCommission(false, 3500));
console.log("#######################################################");

/**
 * 2. Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
• initial amount
• annual interest rate
• number of years to compound

define a table: 
Inputs : initial amount, annual interest rate, and number of years to compound
outputs : balance of a saving account after adding compound interest
process steps: converting years in terms of months, compute monthly rate, initialize balance to initial amount and 
loop total months to compute balance of each month. and update balance for each iteration.
 */
function  compoundInterest(initialAmt, annualInterest, numYears){
    let monthsInYears = numYears*12;
    let monthlyRate = annualInterest/1200; 
    let balance = initialAmt;
    for(let i = 1; i <= monthsInYears; i++){
        let monthlyAmount = monthlyRate*balance;
        balance = (balance + monthlyAmount);

    }
    return balance;
}
console.log("expect 110.47 \t",  compoundInterest(100, 10, 1).toFixed(2));
console.log("expect 16470.09 \t",  compoundInterest(10000, 5, 10).toFixed(2));
console.log("---------------------------------------------------------------------------------------");


/**
 * Cost of House Down Payment
Make a defining table and then write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the cost and return the down payment
amount.
Define Table: 

inputs : cost of house 
output : down payment 
process steps: if condition is used to take decision accordingly.
 */
/**
 * 
 * @param {*} costHouse is the input of the function 
 * @returns  return down payment required according the cost of house
 */
function calcDownPayment(costHouse){
    let downPayment = 0;
    if(costHouse < 50000){
        downPayment = costHouse*0.05
    }
    else if(costHouse >= 50000 && costHouse < 100000){
        downPayment = 2500 + (costHouse - 50000)*0.1;
    }
    else if(costHouse >= 100000 && costHouse < 200000){
        downPayment = 7500 + (costHouse - 100000)*0.15;
    }
    else{
        downPayment = 20000 + (costHouse - 200000)*0.1;
    }
    return downPayment;
}
console.log("expect 2000: ", calcDownPayment(40000));
console.log("expect 2500: ", calcDownPayment(50000));
console.log("expect 7500: ", calcDownPayment(100000));
console.log("expect 25000: ", calcDownPayment(250000));
console.log("###################################################");

/**
 * Write functions sumDigits and multDigits that take an integer parameter and return the sum or
product of the digits in the number. Use the / and % operators to find the digits

Define table

Input: a number 
output : sum of its digits

process : initialize sum to zero, loop with while as long as number is not zero, number modulo 10 gives us last digit of a number
and add a digit to the exist sum and update a number again by a nmber divide by 10. repeat this till condition of while 
loop becomes false.
 */

// sum of digits

function sumDigits(num){
    let sum = 0;
    while (num!==0){
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log("Expect 10 ",sumDigits(1234));
console.log("Expect 3 ",sumDigits(102));
console.log("Expect 8 ",sumDigits(8));
console.log("###################################################################");
//multiplication of digits

function multDigits(num){
    let mult = 1;
    while(num!==0){
        let digit = num % 10;
        mult = mult * digit;
        num = Math.floor(num / 10);
    }
    return mult;
}

console.log("Expect 24 ",sumDigits(1234));
console.log("Expect 0 ",sumDigits(102));
console.log("Expect 8 ",sumDigits(8));

console.log("##########################################");
/**
 * . Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
and returns the temperature in Celsius.
 */
function convertFahrenheit(Fahrenheit){
    let degreeCelsius = (Fahrenheit - 32)*5/9;
    return degreeCelsius;

}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0).toFixed(4));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100).toFixed(4));

console.log("###########################################");

/**
 * 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
 */

function calcDistance(x1, y1, x2, y2){
    let distance = Math.sqrt((x2 -x1)**2 + (y2 - y1)**2);
    return distance.toFixed(2);
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));


