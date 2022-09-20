
"use strict";
// function foo(bat){ 
// if (bat){ 
//   bat =  console.log("bat");
// return bat;
// }
// const long = console.log("short");
// return long;}
// console.log(foo());


// function foo(bat){ 
// if (bat) { 
// bat = console.log("bat");
// return bat;
// }
// const long = console.log ("short");
// return long; 
// }
// console.log(foo(""));


// function foo(bat) { 
// if (bat){ 
// bat = console.log("bat");
// return bat;
// }
// const long = console.log("short");
// return long;}
// console.log(foo(" false"));


// function foo() { 

//     console.log(this);     //_____________ { x: 1, y: 100, z: foo() } __________________

//     this.y = this.y + 1; // _____________ no output ___________________

//     console.log(this.y);    }//______________ NaN ______________________}

// const abc = {  x: 1, y: 100, z: foo };

// console.log(abc.z() ); // ___________undefined ______________________________

const arr = ["34211","23445"];
const s = arr.sort(function(a,b) {return b.charAt(4)-a.charAt(4)});
console.log(s);
