function showMessage(){
    alert('hello friend');
   // console.log('hello mine');

}
showMessage();

// prime number 
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

//Rewrite the function using '?' or '||'
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  // using ?
  function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

  //using ||

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

//   Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  // using ? to find min value
  function min(a, b) {
    return a < b ? a : b;
  }

//   Write a function pow(x,n) that returns x in power n. Or, 
// in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }