//"use strict";
/* eslint-disable */

// function a() {
//   console.log("this in function a: ", this); // undefined strict/ global not strict
// }

// const b = {
//   dog: 'fido',
//   log: function () {
//     console.log("this in method/function log: ", this); //object { dog: 'fido', log: [Function: log] } to all
//   }
// }

// console.log("this in console.log: ", this); // {} all
// a();
// b.log();
// let mylog = b.log;
// mylog(); // undefined strict mode / global no strict

//8888888888888888888888888888888888888888
// function foo() { console.log(this); }
// const bob = {
// log: function() {
// console.log(this);
// }
// };
// //console.log(this); // this is window in browser ({} in node**)
// // foo(); //foo() is called by window object (global in node)
//  bob.log();

// //"use strict";
// function area(){
//     console.log(this); 
//     return this.side * this.side;
//     }
//     const square1 = {side: 5, area: area};
//     console.log(square1.area());
function User(name){
    console.log("1:" , this);
    this.name = name;
    console.log("2:" , this);
    }
    tina = {};
    const thisUser = User.bind(tina);
    thisUser("Rujuan");
    thisUser("Tina");
    console.log("3: ", tina);
