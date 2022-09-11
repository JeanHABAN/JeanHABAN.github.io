"use strict";
/**
 * Write a function, myCallback( func, arg). myCallback will call func
with the given arg and then log the return value to the console.
➢Test myCallback by calling it with a function that takes a number and returns the cube of the
argument. First write it as "cube" a normal named function declaration, then as an anonymous
function expression.
➢Also test with a function that returns true if the arg is an even number
➢ myCallback(cube, 10) → 100
➢ myCallback(isEven, 10) → true
 */

// function myCallback(func, arg) {
//     return func(arg);

// }

// function isEven(num) {
//     return (num % 2 === 0);
// }

// console.log("expect 100",)

/**
 * exam 1 correction
 */
//%%%%%%%%%%% Q1
// let start = 0;
// function someFun(num) {
//     let jordan = 23;
//     if (num >= 0) {
//         num = Math.sqrt(num)
//     }
//     start = jordan + num;
//     console.log(num + " " + jordan + " " + start);
//     return num;
// }
// console.log(start);
// console.log(someFun(100));
// console.log(start);
// console.log(jordan);

//%%%%%%%%%%%%%%%%%%%%%%%%%%% Q3

// const x = 10;
// const y = x;
// y = 100;
// console.log(y);

//%%%%%%%%%%%%%%%%%%%%%% Q6

let myArray=[1,2,3,4];
let anotherArray=[10,11,12,13];
console.log(myArray[0]); 
myArray=anotherArray;
console.log(myArray[0]); 
console.log(myArray.length); 

// function hi(name){return 'Hi ' + name;}

// let goodBye= function(){return 'Good Bye';}

// alert(hi('Developer','Welcome')); //_________________________
// alert(goodBye('Developer'));// _________________________
// alert(goodBye); //_________________________
// alert(goodBye()); 

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//      alert("Age is less than 18");
//     }
//    }
//    const z = checkAge(19);
//    const w = checkAge(18);
//    alert(z);
//    alert(w);

// function getSix() { return 6;}
// const f1 = getSix();
// const f2 = getSix;
// const f3 = f1;
// const f4 = f2();
// //const f5 = f1();
// alert(f1);
// alert(f2);
// alert(f3);
// alert(f4);
// alert(f5);

//******************************* */
/**
 * Write a function named sortThis that takes three input parameters and returns an array
that has them sorted in ascending order
 */
function sortThis(num1, num2, num3){
    let arr = [];
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);
    
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp;
            }
        }

       
    }
    return arr;
}
console.log(sortThis(2,4,1));
/**
 * 4] Write a function named somethingOdd that takes an array of numbers as input and returns
the product of all the array values at the odd indices. You can use a simple for loop.
 */

/**
 * 
 * @param {*} arr 
 */

function somethingOdd(arr){
    let prod = 1;
    for(let i=0; i<arr.length; i++){
        if(i%2!=0){
            prod = prod*arr[i];
        }else{
            continue;
        }
    }
    return prod;

}

let num =[2,3,4,5,6];
console.log(somethingOdd(num));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// if(0){
//     console.log(0);
    
// }else{
//     console.log(1);
// }

//#########################
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");
//     return bat;
//   }
//   const long = console.log("short");
//   return long;
// }
// console.log(foo());
// console.log(foo(""));
// console.log(foo("false"));

let x = null;
x = 7;
let wa = undefined;
wa =8;
console.log(x);
console.log(wa);