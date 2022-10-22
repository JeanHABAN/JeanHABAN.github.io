function contains(array, givenString) {
    if (array.length == 1)
        return array[0] == givenString;
    let str = array.shift();
    if (str == givenString)
        return true;
    return contains(array, givenString)
}

function concatenate(array) {
    if (array.length == 1)
        return array[0];
    let str = array.shift();
    return str + concatenate(array);
}

function findLastIndexOf(array, givenString) {
    if (array.length == 0)
        return  -1;
    let str = array.pop();
    return str == givenString ? array.length : findLastIndexOf(array, givenString);
}

function findIndexOf(array, givenString) {
    if (array.length == 0)
        return  -1;
    let str = array.shift();
    return str == givenString ? 0: 1+ findIndexOf(array, givenString);
}

function findMin(array) {
    if (array.length == 1)
        return  array[0];
    let digit = array.shift();
    let earlierMin = findMin(array);
    return digit < earlierMin? digit: earlierMin;
}
function findMax(array) {
    if (array.length == 1)
        return  array[0];
    let digit = array.shift();
    let earlierMin = findMax(array);
    return digit < earlierMin? earlierMin:digit;
}

function findOccurence(array,givenString){
    if (array.length == 0)
        return  0;
    let str = array.shift();
    let count =  str == givenString ?1:0
    return count+ findOccurence(array, givenString);
}

function findOccurenceInString(myString,letter){
    if (myString.length == 0)
        return  0;
    let str = myString.charAt(0);
    myString =myString.substring(1);

    let count =  str == letter ?1:0
    return count+ findOccurenceInString(myString,letter);
}

function findSum(n){
    if (n==1)
        return  1;
    return n+findSum(n-1);
}

// console.log(findSum(4))
//Concatenate all strings
console.log(contains(['apple', 'banana', 'grapes'], 'grapes'))
// //string contains
// console.log(concatenate(['apple', 'banana', 'grapes']))//applebananagrapes
// console.log(findLastIndexOf(['apple', 'banana', 'apple'], 'apple'))//2
// console.log(findIndexOf(['apple', 'banana', 'apple','banana'], 'banana'))//1
// console.log(findMax([4,5,2,3]));//5
// console.log(findMin([4,5,2,3]));//2
// console.log(findOccurence(['apple', 'banana', 'apple'], 'apple'));//2
// console.log(findOccurenceInString('apple', 'p'));//2
//Find Minimum number;

