// alert('hello');
// alert('do you knw that ?'); alert(2+3);
// let message;
// message = 'Jean';
// alert(message);

/**
 * Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc –
 show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 */
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// // break 
// let sum = 0;
// while(true){
//     let value = +prompt('enter a value', '');
//     if(!value) break;
//     sum +=value;
// }
// alert("summation: "+ sum);

// // continue
// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0) continue;
//     alert(i);
// }

let conf = confirm("are you salaried");
let sales = prompt("What's your sales?");
let comm = null;
if(conf==true){
    if(sales <= 300 ){
        comm = 0;
        alert(comm);
           
    }
    else if(sales > 300 && sales < 500){
        comm = sales*0.01;
        alert(comm);
    }
    else {
        comm = sales*0.02;
        alert(comm);
    }
    
}else{
    if(sales > 300 && sales < 500){
        comm = sales*0.02;
        alert(comm);
    }else{
        comm = sales*0.03;
        alert(comm);
    }
    
}
