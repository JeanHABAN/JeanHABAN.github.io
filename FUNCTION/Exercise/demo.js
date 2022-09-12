"use strict";
//console.log("good morning ");

/**
 * Write code to output 5+5
• Update code to save some integer values on constants X and Y and print the
sum to the console (console.log).
• Update code to save some integer values on re-assignable variables x and y
and print the sum.
 */
// console.log(5 + 5);
// const X = 10;
// const Y = 5;
// console.log(X + Y);

// const prompt = require("prompt-sync")();
// let name = prompt ("your name please!");
// console.log("tsup", name);


/**
 * Following program asks user to input temperature value in degree Celsius and
outputs the result in degree Fahrenheit. Make this program run on your
machine.
 */
// const prompt = require ("prompt-sync")();
// const tempInCelsius = prompt("Enter a value in celsius: ");
// const tempInF      = 9/5* Number(tempInCelsius) +32;
// console.log( tempInF);

/**
 * • Write a program that computes volume of a cylinder based on user inputs for
radius and height of a cylinder, using formula v = πr2h
 */
// const prompt = require("prompt-sync")();
// const radius = +prompt ("Enter a value of radius: ");
// const height = +prompt ("Enter a value of height: ");
// const volume = Math.PI*radius**2*height;
// console.log(volume);

/**
 * • Write a program that accepts user age as input and output following based on
the input
• If age <= 0
• print "please enter valid age"
• if age is between 0 and 14
• print "You can't drive yet."
• if age is between 15 and 18
• print "You can drive under supervision."
• if age is 19 or higher
• print "You can drive.
 */

// let age = +prompt("Enter your age: ");

// if (age <= 0){
//     console.log("Please enter valid age");
// }
// else if (age > 0 && age <= 14){
//     console.log("you can't drive yet.");
// }
// else if(age >= 15 && age <= 18){
//     console.log("you can drive with supervision")
// }
// else{
//     console.log("you can drive");
// }

/**
 * 11111
   22222
   33333
   44444
   55555
 */
// for(let i = 1; i <= 5; i++){
//     let row ="";
//     for(let j = 1; j <= 5; j++){
//         row += i + "\t";
//     }
//     console.log(row);
// }

/**
 * 12345
   12345
   12345
   12345
   12345
 */
//    for(let i = 1; i <= 5; i++){
//     let row ="";
//     for(let j = 1; j <= 5; j++){
//         row += j + "\t";
//     }
//     console.log(row);
// }

/**
 * 1. Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500 
 */

// let conf = confirm("are you salaried?");
// let sales = +prompt("What's your sales?", "");
// let comm = null;
// if(conf==true){
//     if(sales <= 300 ){
//         comm = 0;
//         alert("commission fees: "+comm);
           
//     }
//     else if(sales > 300 && sales < 500){
//         comm = sales*0.01;
//         alert("commission fees: "+comm);
//     }
//     else {
//         comm = sales*0.02;
//         alert("commission fees: "+comm);
//     }
    
// }else{
//     if(sales > 300 && sales < 500){
//         comm = sales*0.02;
//         alert("commission fees: "+comm);
//     }else{
//         comm = sales*0.03;
//         alert("commission fees: "+comm);
//     }
    
// }

/**
 * Write a loop that continually prompts for age until you enter age older than 18
• Write both while and do while versions.

 */

// while(true){
//     let age = +prompt("Enter your age: ");
//     if(age > 18) break;
// }

// // do while 
// do{
//     let ages = +prompt("Enter your age: ");
//     if(ages > 18) break;

// }while(true);

/**
 * Make a defining table and program to print out the balance of a savings account that
compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound

 */
//?????????????????????????????????????????????????????????????????


/**
 * 1
   22
   333
   4444
   55555

 */
// for(let i = 1; i <=5; i++){
//     let row ="";
//     for(let j = 1; j<=i ; j++){
//         row += i+ "\t";
//     }
//    console.log(row);
// }

/**
 * 55555
4444
333
22
1
 */

// for(let i = 5; i>=1; i--){
//     let row ="";
//     for(let j = 1; j<=i ; j++){
//         row += i+ "\t";
//     }
//     console.log(row);
// }


// 6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits.

// let num = +prompt("Enter a number");
// let sum =0;
// while(num!=0){
//     let digit = num%10;
//     sum = sum + digit;
//     num = Math.floor(num/10);
// }
// alert(sum);

// if("false") console.log(0) 
// else console.log(1); // 0

// function myFun(){

//   console.log("Oh happy day!")

// }
// const returnVal = myFun(); // undefined

// function sum(num1, num2){
//   return num1+num2;
// }
// console.log(sum());

/** 
 * Write a function named testPrime that returns true when the argument to the
function is a prime number, otherwise returns false.
• (Best practice to first write the steps in English )
• E.g., “defining table”
• Now call the function to test if user input is prime or not.

defining table
inputs : any positive integer 
outputs : true if it is a prime number
process steps: 
loop throught numbers from 2 to a number - 1 and see if is divisible by the number.
- if it is divisible by number then return false.
 */
/**
 * 
 * @param {*} num is any positive integer
 * @param {boolean} true if prime
 */
function testPrime(num){
  for(let i = 2; i < num ; i++){
    if(num%i===0){
      console.log("divisible by: ",i);
      return false;
    }
  }
  return true;

}

console.log(" expected answer", testPrime(15));

let x =1, y = 2;
let message = "Hi";
if(x < 2){
  if(y > 7){
    message = "bye";
  } else{
    message ="Hola";
  }
}
message ="Hello";
console.log(message);

let x1= 1;
let y1 = '2';
let z = true;
let s = x1 + y1;
console.log(s);
console.log(typeof(s));
x1 = x1 + z;
console.log(x1);
console.log(typeof(x1));
y1 = x1++ * y1;
console.log(y1);
console.log(typeof y1);
s = parseInt(s);
s +='3';
console.log(s);
console.log(typeof s);
z =!!s;
console.log(z);
console.log(typeof z);

let age = 10;

console.log(age);

function output() {

  age = 20;

  console.log(age);

}

output();

console.log(age);
const foo = console.log("hello");

// function write2file(content) {
//   fsys.writeFile("./testWrite.txt", content, function () {});
// }
//   const returnVal = write2file( Math.max(1, 2, 3));

  let arr =["eric", "you","hi"];
  console.log(arr[-1]);//undefined
  console.log(arr.at(-1));//hi
  let arrr = [1,2,4,8];
  console.log(arrr[1]);

//  let x =[1]; let y = [1];
//   console.log(x===x);
//   console.log([1]===[1]);

  let arra = ["l","m","n"];
  function quiz (arra){
    for(let i=0; i<arra.length; i++){
      arra[i];
    }
    return arra.length;
  }
  console.log(quiz(arra));

 

