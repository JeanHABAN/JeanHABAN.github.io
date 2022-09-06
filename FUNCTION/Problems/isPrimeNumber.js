function isPrime(num){
    if(num === 1){
        return false;
    }
    else if(num > 1){
        for(let i = 2; i< num ; i++){
            if(num % i === 0){
                return false;
            }
            
        }
        return true;
    }
}

console.log(isPrime(6));

// other way for listing prime numbers

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}