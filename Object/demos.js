"user strict";
let user = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};
user.isAdmin = true;
user.eric = 123;
user.erica = 123;
delete user.erica;
delete user.erica;
delete user.dd;
console.log("dddddddddddddddddddddddd", user);



/**
 * ➢ Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢push the students into an array, quiz
➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., 
[3,1,2,4] and returns an array that has scores for each student. Their score is the number of 
correct answers. 
➢ expect [ 3, 2, 3 ]
➢ use a helper function to compute the score for a given student
*/

// let student1 = {
//     studentId: s101,
//     quizAnswers: [1, 1, 2, 4]
// };

// let student2 = {
//     studentId: s102,
//     quizAnswers: [2, 1, 2, 2]
// };

// let student3 = {
//     studentId: s103,
//     quizAnswers: [3, 1, 3, 4]
// };

// let quiz = [student1, student2, student3];
// const answers = [3, 1, 2, 4];

// /**
//  * 
//  * @param {Array} quizArray has student objects 
//  * @param {*} answers has the correct answers
//  * @returns {Object} contains quiz scores for each studentid
//  */
// function gradeQuiz(quizArray, answers) {
//     //const grades = {}; //need the object to return
//     const grades = [];
//     // loop through the array of students and grade their answers
//     for (const student of quizArray) {
//         const studentScore = scoreStudent(student, answers);
//         grades[student.studentId] = studentScore;
//         //const stuId = student.studentId;
//         //grades.push({stuId, studentScore});
//     }
//     return grades;
// }

// /**
//  * 
//  * @param {Object} student is student object 
//  * @param {*} answers are quiz answers
//  * @returns {number} score for the quiz
//  */
// function scoreStudent(student, answers) {
//     let score = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (student.quizAnswers[i] === answers[i]) {
//             score = score + 1;
//         }
//     }
//     return score;
// }

// console.log("quiz results are: ", gradeQuiz(quiz, answers));
// console.log("quiz is: ", quiz);


/**
 * const numbers = {
one: 1,
two: 22,
three: 333,
four: 444
}
const properties = ["one", "two", "three", "four"];
//write a for loop to print out the values of the properties in numbers. You must use the properties 
array to access the values. You cannot directly write console.log(numbers.one) 
 */

const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
}
const properties = ["one", "two", "three", "four"];
for (const values of properties) {
    console.log(numbers[values]);
}

// const a = 5;
// const b = 5;
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = {name: "John", age: 10};
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = a;
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);

// let baz = "" + 33 + 10;
// console.log(baz === 43);

// const a = 4;
// a = 6;
// console.log(a);
// const a = { x: 5 };
// a.x = 6;

const gradeReport = { s101: 3, s102: 2, s103: 3 };
function getProperties(obj) {
    let arr = [];
    for (const property in gradeReport) {
        arr.push([property]);
    }
    return arr;
}
console.log(getProperties(gradeReport));

//#############################################################

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     //IMPLEMENT THIS

     const output = "hello, my name is "+this.name+". I am "+this.age+". My job is "+this.job
     console.log(output);
  }
  
  // add sayHi function to both objects
  // manager.sayHi = sayHowdy;
  // intern.sayHi = sayHowdy;

  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

  console.log("foooooooooooooooooooooooo");

  function foo() { //https://jsfiddle.net/keithlevi/78wvohsy/9/
    console.log(this);     //_____________ { x: 1, y: 100, z: foo() } __________________
    this.y = this.y + 1; // _____________ no output ___________________
    console.log(this.y);    }//______________ NaN ______________________}
const abc = {  x: 1, y: 100, z: foo };
console.log(abc.z() ); // ___________undefined ____________________


/**
 * use forEach to log all the even elements of an array to the
console
[1,5,16,3, 108]
 */


[1,5,16,3, 108].forEach(value => {if(value%2===0)console.log(value);}); // 16, 108

// //second way
// function logEven(value){
//     if(value%2===0){
//         console.log(value);
//     }
// }
// [1,5,16,3, 108].forEach(logEven);

/**
 * const numbers = [1, 5, 18, 2, 77, 108];
➢ use filter, find, and findIndex to find
➢ all the even numbers
➢ the first even number
➢ the index of the first even number
 */
const number = [1, 5, 18, 2, 77, 108];
function logEven(value){
    if(value%2===0){
        return true;
    }else{
        return false;
    }
}
const numEven = number.filter(logEven)
console.log("expect [18, 2, 108]: ", numEven);

console.log("expect 18: ", number.find(logEven));
console.log("expect 2: ", number.findIndex(logEven));

let myInt = '555gghfggff';
//myInt = false;
let x = parseInt(myInt,10);
console.log(x);

console.log(+"5678"===Number("5678"));
const s = {name:"john", age:10};
const g = {name:"john", age:10};
console.log(s===g);

// const t = 5;
// t= 6;
// console.log(t);//error
const zen ={xed : 5};
zen.xed = 6;
console.log(zen);//6 no error

// const zen ={xed : 5};
// zen = {xed:6};
// console.log(zen);//error

function area(){
    console.log(this);  //{ side: 5, area: [Function: area] }
    return this.side*this.side;
}
const square = {side:5, area:area};
square.area();

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
function sumPoints(players){
    let sum = 0;
    for(let i= 0; i<players.length;i++){
        sum = sum + this.points
    }
    return sum;
}

console.log("expect 10: ", sumPoints(players));

/* write a function findProps to return an array of all the properties in any given object */
//console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
 function answerComparator(ans1, ans2) {
     let sorted=[];
     for(const sor of quiz.students){
        let temp=sor.answers.sort((a,b)=>a.qid>b.qid?1:-1) 
        console.log(temp)//check 
        sorted.push(temp)
   }
   return sorted;
}
   console.log(answerComparator(quiz))
 /* let sortedAn=quiz.students.answers.sort((ans1,ans2)=>ans1.qid>ans2.qid?1:-1)
 console.log(sortedAn); */
 
 //777777777777777777777777777777777777777777777777777777777777

 let bob = [{first: "Bob"}, {last: "Jones"}, {phone: "x1234"} ]
 let ned = {first: "Ned", last: "Blue", phone: "x1235"}
 
 function abcd(){ 
   const arr = [];
   for(const element of bob ){ arr.push(element);  } return arr;}
console.log(abcd()); 

function xyz(){ 
const arr = [];
   for(const element in bob ){  arr.push(element); } return arr;}
console.log(xyz()); 

function lmn(){ 
const arr = [];
   for(const element in ned ){  arr.push(element); } return arr;}
console.log(lmn()); 

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function debit(amount) {
    console.log(this);    
    this.balance = this.balance  - amount;  
    console.log(this.balance);   
}
const account = {  balance: 10, debit: debit };
const myDebit = account.debit;
console.log(myDebit(5));
//ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
let lama = {
    x: 2,
      bar: function() {
        console.log("ma1: ", this);
        this.y = true;
        console.log("ma2: ", this);  }};
    
    let lamalin = {
      bat: function() {
        this.foo();
        console.log("lin1: ", this);  },//global
    
      __proto__: lama,
    
      foo: function() {
        this.bar();
        console.log("lin2: ", this);  },
    };
    console.log(lamalin.bat());
    