//sum of n numbers
const { performance } = require("perf_hooks");

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(10));

let t0 = performance.now();
addUpTo(1000);
let t1 = performance.now();

let seconds = (((t1 - t0) % 600000) / 1000).toFixed(5);
console.log(`Time elapse ${t1 - t0} ms`);
console.log(`Time elapse ${seconds} s`);

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stanger = true; //O(n)
    a++; //O(n)
  }
  return a;
}

function anotherFunChalenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;

  for (let i = 0; i < input.length; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input.length; j++) {
    //O(n)
    let p = j + 1; //O(n)
    let m = j + 2; //O(n)
  }
  let string = "I dont know";
}

// 4 + 4n + 3n
