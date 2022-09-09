"use strict";
/**
 * • Write code to create an array named scores and fill it with 5 test scores 10,
20, 30, 40 and 50.

 */
const scores = [10, 20, 30, 40, 50];

/**
 * • Now write a function named findAverage, that takes an array as an
argument and return average of the array values.
 */
/**
 * 
 * @param {array} scores 
 * @returns return average of scores
 */
function findAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    return sum / scores.length;
}

console.log(findAverage(scores));

/**
 * Create a second array filled with 10 random values between 0 to 10 and
find the average of the array values.
• Should compute correct average for an array of any size
 */

const arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.ceil(Math.random() * 10);
}

console.log(arr);

/**
 * Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}”
are balanced in exp.
- Use a for .. of loop through the expression array
- push any left bracket onto a stack
- on a right bracket pop the stack and check that return value is a left bracket
- if not, then not balanced
- if stack empty at end then balanced, else not balanced
 */

function areBracketBalanced(expr) {
    const stack = [];
    for (const element of expr) {
        /* push any left bracket onto stack*/
        if (element === "{") {
            stack.push(element);
        }
        /* on the right bracket*/
        if( element ==="}"){
            const stackElement = stack.pop(element);
        }
    }
}

// other way $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Javascript program for checking
// balanced brackets

//Function to check if brackets are balanced
function areBracketsBalanced(expr) {

    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];

    // Traversing the Expression
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{') {

            // Push the element in the stack
            stack.push(x);
            continue;
        }

        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    // Check Empty Stack
    return (stack.length == 0);
}
// Driver code
let expr = "([{}]))";

// Function call
console.log(areBracketsBalanced(expr));

//#################################################################
/**
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.
 * @param {*} arr 
 * @returns 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([-1, -2, -3]) ); // 0

  function maxOfThree(a, b, c){ 
    if(a > b && b > c){
        return a;
    }else if (b > a && b > c){
        return b;
    }else {
        return c;

    }
        
}

console.log(maxOfThree(2,7,5));