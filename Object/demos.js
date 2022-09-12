"user strict";
let user = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};
user.isAdmin = true;
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

let student1 = {
    studentId: s101,
    quizAnswers: [1, 1, 2, 4]
};

let student2 = {
    studentId: s102,
    quizAnswers: [2, 1, 2, 2]
};

let student3 = {
    studentId: s103,
    quizAnswers: [3, 1, 3, 4]
};

let quiz = [student1, student2, student3];
const answers = [3, 1, 2, 4];

/**
 * 
 * @param {Array} quizArray has student objects 
 * @param {*} answers has the correct answers
 * @returns {Object} contains quiz scores for each studentid
 */
function gradeQuiz(quizArray, answers) {
    //const grades = {}; //need the object to return
    const grades = [];
    // loop through the array of students and grade their answers
    for (const student of quizArray) {
        const studentScore = scoreStudent(student, answers);
        grades[student.studentId] = studentScore;
        //const stuId = student.studentId;
        //grades.push({stuId, studentScore});
    }
    return grades;
}

/**
 * 
 * @param {Object} student is student object 
 * @param {*} answers are quiz answers
 * @returns {number} score for the quiz
 */
function scoreStudent(student, answers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (student.quizAnswers[i] === answers[i]) {
            score = score + 1;
        }
    }
    return score;
}

console.log("quiz results are: ", gradeQuiz(quiz, answers));
console.log("quiz is: ", quiz);


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