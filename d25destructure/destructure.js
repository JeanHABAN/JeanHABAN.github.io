"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, cloneObject }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
  let max=0 , name= null;
  // using using entries
  for ( let [key, value] of Object.entries(salaries)){
   if(max < value){
     max = value;
     name = key;
   }
  }
return name;
}

function cloneObject(obj) {
    let jsonObject = JSON.stringify(obj);
    let newObject = JSON.parse(jsonObject);
    console.log(newObject);
    return newObject === obj;
  }

// ccc = 10;
//console.log(alpha);