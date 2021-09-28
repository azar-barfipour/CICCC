//Recursion: it's a function that refers itself inside of the function
// function inception() {
//   debugger;
//   inception();
// }
// inception(); //Maximum call stack size exceeded: stack overflow

function countDown(num) {
  while (num > 0) {
    console.log(num);
    num--;
    countDown(num);
    break;
  }
}
countDown(10);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(100));
//100 + sumRange(99)
//100 + 99 + sumRange(98)
//...

//Fibonaci Recursive
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));

//Fibonaci Iterative
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fib(4));

//Factorial Iterative
function fac(n) {
  let product = 1;
  for (let i = 2; i <= n; i++) {
    product *= i;
  }
  return product;
}

console.log(fac(5));

//Factorial Recurtive
function fac(n) {
  if (n === 2) return 2;
  return n * fac(n - 1);
}
console.log(fac(5));
