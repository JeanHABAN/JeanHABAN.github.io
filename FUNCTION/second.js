console.log('my name is you ');
let a = 6;
let b = 5;
console.log(a+b)
alert(a+b);
alert(NaN**0);//1
let name = "john";
let word = `my name is ${name}`;
alert(word);

//prompt
let text = prompt('how old are you?');
let text1 = `I am ${text}`;
alert(text1 );

//confirm
let isBoy = confirm('are you a boy?');
alert(isBoy);

//one example 
let conf = confirm("are you above 18 years old?");
if(conf==false){
    alert('sorry guys')
}
let lName = prompt('enter your name here: ');
let age = prompt('enter your age ');
if( age>=18 ){
    alert('you are good to go');
}else
alert('you are denied');

//other example
let ask = prompt('how old are you?');
alert(`you were born ${2022-ask}`);

// use strict
"use strict";
let age1 = prompt("How old are you?")
let year = new Date()
alert(`You were born around ${year.getFullYear()-age1}`)
