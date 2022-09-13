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

  