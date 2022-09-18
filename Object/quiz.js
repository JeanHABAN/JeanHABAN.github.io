"use strict";
// let phrase = "Hello";
// if(true){
//     let user ="John";
//     function sayHi(){
//         console.log(`${phrase},${user}`);
//     }
// }
// sayHi();
//ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
//const { getMaxSubSum } = require("../../d23dataTypes/app");

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("expect 4: ", sumPoints(players));

/**
 * 
 * @param {arr} playersArr is arr of players
 * @returns {number} max of points for players
 */
function sumPoints(playersArr) {

    let max = 0;
    let arr = [];
    for (const player of playersArr) {
        /* get sum of player points */

        let sum = 0;
        for (const points of player.points) {
            sum += points;
            arr.push(sum);
        }
    }
    max = arr.reduce((max, current) => max > current ? max : current);
    return max;
}
const array123 = [1, 2, , 7, 3]
let res = array123.map(element => element * element);
console.log(res);

let sum = array123.reduce((res, val) => (res += val), 0);
console.log(sum);
let maxss = array123.reduce((max, val) => max > val ? max : val);
console.log(maxss);


let str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive
console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
//3333333333333333333333333333333333333333333333333333
let bob = 10;
function bill(bob, jim) {
    jim = bob * 2;
    return jim;
}
let jim = bob * 2;
console.log(jim); //20
console.log(bill(jim, bob));//40
//2222222222222222222222222222222222
function squareOrCube(value, square, cube) {
    if (value < 10) return square(value)
    else return cube(value);
}
function square(value) {
    return value * value;
}
function cube(value) {
    return value * value * value;
}

console.log(squareOrCube(10, square, cube));
console.log(squareOrCube(9, square, cube));

//5555555555555555555555555555555555
function area() {
    console.log(this); //{side: 5, area:[function:area]}
    return this.side * this.side;
}
const squar = { side: 5, area: area };
squar.area();

//largest word
function largestWord(str) {
    let arrWord = str.split(" ");
    let max = arrWord[0].length;
    for (let i = 0; i < arrWord.length; i++) {
        if (arrWord[i].length > max) {
            max = arrWord[i].length;
        }
    }
    return max;
}

let newAr = "what a great day";
console.log(largestWord(newAr));
// compare
const arr1 = [1, 10];
const arr2 = [1, 10];
const arr3 = arr1;
console.log('comp ',arr1 == arr2);

//output
let myVal = 20;
function trouble(myVal) {
    myVal = myVal % 7;
    console.log(myVal); //6
    return myVal * 10;
    console.log(myVal);// unreachable
}
console.log(myVal);//20
trouble(myVal);
console.log(myVal);//20

//own filter
function myFliter(arr, callBack) {
    const newA = [];
    for (const val of arr) {
        if (callBack(val)) {
            newA.push(val);
        }
    }
    return newA;
}

function callBack1(num) {

    if (num > 10) {
        return true;
    }

    return false;
}
let arr33 = [5, 11, 3, 1, 33];
console.log(myFliter(arr33, callBack1));

//reduce
const arr = [1, 2, 3, 2];

console.log(arr.reduce(
    (max, current) => {
        if (current > max) {
            return current;
        }
        else { return max; }
    }, -Infinity));

    // output
    function User(name){
        console.log("1:" , this);
        this.name = name;
        console.log("2:" , this);
        }
      const tina = {};
      const thisUser = User.bind(tina);
      thisUser("Rujuan");
      thisUser("Tina");
      console.log("3: ", tina);  
      

//       "use strict";
// function debit(amount) {
//     console.log(this);    
//     this.balance = this.balance - amount;  
//     console.log(this.balance);   }
// const account = {  balance: 10, debit: debit };
// const myDebit = account.debit;
// myDebit(5);