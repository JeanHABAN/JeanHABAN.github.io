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
function getMaxSubSum(arr) {
let listSums = [];
for(let i = 0 ; i < arr.length; i++){
let sum = 0;
for(let j = i ; j < arr.length ; j++){
sum += +arr[j]
listSums.push(sum);
}
}
return(Math.max(...listSums));
}

const data = [-1,-2,-3];
console.log(getMaxSubSum(data));