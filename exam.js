"use strict";

const bank = { transactionsDB: [], };

bank.transactionsDB = [

    { customerId: 1, customerTransactions: [10, 50, -40] },

    { customerId: 2, customerTransactions: [10, 10, -10] },

    { customerId: 3, customerTransactions: [25, -5, 55] }];

//return array with all customers who had deposits greater than 20. 

//array should contain objects with customerId and the transaction amount for each such transaction

function findTransactionsByAmount(bank) {

    const foundDepositsArray = [];

    for (const customerObj of bank.transactionsDB) {

        //now loop through this customers transactions and save any that are > 20

        for (const transAmount of customerObj.customerTransactions) {

            if (transAmount > 20) {

                foundDepositsArray.push({ custId: customerObj.customerId, amount: transAmount });
            }
        }
    }

    return foundDepositsArray;
}


console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",

    findTransactionsByAmount(bank));


/* Write a function, computeCharges,  that will accept an array that contains objects with properties for
 the customer Id and charges, e.g., {custId: 5556, charges: [50, 40, 60]}.  Your function should return an
array that contains objects with the customer Id, average charge, and maximam charge, e.g., {custId: 5556, average: 50, maximum: 60}. */

/*function computeCharges(charges) {
    const report = [];
    for (const cust of charges) {
      const custReport = {};
      custReport.average = average(cust.charges);
      custReport.maximum = maximum(cust.charges);
      report.push(custReport);
    }
    return report;
  }

  function average(arr) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    const average = sum / arr.length;
    return average;
  }

  function maximum(arr) {
    let max = 0;
    for (const num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
  const chargesArray = [{
      custId: 1,
      charges: [1, 2, 3]
    },
    {
      custId: 2,
      charges: [10, 20, 30]
    },
    {
      custId: 3,
      charges: [100, 200, 300]
    },
  ]
  console.dir(computeCharges(chargesArray));*/

//   const y = {
//     a:1,
//     b:2,
//     add: ()=>{return this.a + this.b}
// };
//   console.log(y.add());

// function Incrementer(start) {
//     this._value = start;
//     this.increment = function (amount) {
//         this._value += amount;
//         return this._value;
//     }
//     this.decrement = function (amount) {
//         this._value += amount;
//         return this._value;
//     }


// }
// let increment = Incrementer(100);
// console.log(increment(1));