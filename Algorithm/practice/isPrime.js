function isPrime(num) {
  if(num < 2) {
    return false;
  }

  if(num === 2) {
    return true;
  }

  for(let i = 2; i < Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }

    return true;
  }
}

console.log(isPrime(7)); //기댓값: true
console.log(isPrime(8)); // false
console.log(isPrime(10));  // false
console.log(isPrime(5)); // false
console.log(isPrime(2)); // false
