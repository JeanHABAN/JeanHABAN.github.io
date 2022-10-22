// let stringa = 'hello world hs';
// console.log(stringa)
// for(let i = 0; i<5; i++){
//     console.log(i);
// }

function power(x, n){
    let result = 1;
    for(let i = 0; i < n ; i++){
        result *= x;
    }
    return result;
}
let answer = power(2, 3);
console.log("the result: "+ answer);

// describe( "power", function(){

//     function makeTest(x){
//         let expected = x*x*x;
//         it(`${x} in the power 3 is ${expected}`, function() {
//             assert.equal(pow(x, 3), expected);
//         });
//     }
//     for( let x = 1; x <= 5; x++){
//         makeTest(x);
//     }

// });

