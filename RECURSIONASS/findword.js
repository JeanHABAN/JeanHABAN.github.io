//Find if the element exists in the array

function contains(array, target){
    if(array.length==1){
        return array[0]==target;
    }
    let ele = array.shift();
    if(ele==target){
        return true;
    }
   
    return contains(array, target);

}
console.log(contains(['apple', 'banana', 'grapes'], 'grapes'))
console.log(contains(['apple','banana','grapes'],'pear'))


//Find if the character is present in the given string

// function contains(str, target){
//     if(str.length==0){
//         return -1;
//     }
   
//     else if(target==str.charAt(0)){
//         return true;
//     }
//     return contains(str, target)

// }

// console.log(contains('apple','a'));
// console.log(contains('apple','b'));


//Concatenate all the strings in the array

function concatenate(array){
    if(array.length==1){
        return array[0];
    }
    let ele = array.shift();
    return ele + concatenate(array);
}
console.log(concatenate(['apple', 'banana', 'grapes']))//applebananagrapes


//Find Last Index of the element in the array
function findLastIndexOf(array, target){
    if(array.length==0){
        return -1;
    }
    let last = array.pop();
    if(last == target){
        return array.length;
    }else{
       return findLastIndexOf(array,target);
    }

}

console.log(findLastIndexOf(['apple', 'banana', 'apple'], 'apple'))//2

//Find first Index of the element in the array
function findIndexOf(array, target){
    if(array.length==0){
        return -1;
    }
    let firstOccur = array.shift();
    if(firstOccur == target){
        return array[0]==target;
    }
    return 1 + findIndexOf(array, target);
}

console.log("findfirst: ",findIndexOf(['apple', 'banana', 'apple','banana'], 'banana'))//1