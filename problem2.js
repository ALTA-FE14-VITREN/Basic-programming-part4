function fibbonacci(fibo) {
  if (fibo === 0) {
    return 0;
  }
  if (fibo === 1) {
    return 1;
  }
  return fibbonacci(fibo - 1) + fibbonacci(fibo - 2);
}

console.log(fibbonacci(0));
console.log(fibbonacci(1));
console.log(fibbonacci(2));
console.log(fibbonacci(3));
console.log(fibbonacci(4));
console.log(fibbonacci(5));
console.log(fibbonacci(6));
