function primeX(number) {
  let count = 0;
  let num = 2;

  while (count < number) {
    if (primeNumber(num)) {
      count++;
    }
    if (count === number) {
      return num;
    }
    num++;
  }
}
function primeNumber(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeX(1));
console.log(primeX(5));
console.log(primeX(10));
console.log(primeX(15));
console.log(primeX(20));
console.log(primeX(21));
