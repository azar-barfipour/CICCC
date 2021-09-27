//sum of n numbers
const performance = require("perf_hooks");

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(10));

var t0 = performance.now();
addUpTo(1000);
var t1 = performance.now();

let seconds = (((t1 - t0) % 600000) / 1000).toFixed(5);
console.log(`Time elapse ${t1 - t0} ms`);
console.log(`Time elapse ${seconds} s`);
