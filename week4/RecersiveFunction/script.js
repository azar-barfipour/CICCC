// function power(base, ex) {
//   let total = 1;
//   for (let i = 1; i <= ex; i++) {
//     total *= base;
//   }
//   return total;
// }

// console.log(power(2, 3));

//Recursive Function Power
function power(base, ex) {
  if (ex === 0) return 1;
  return base * power(base, ex - 1);
}
console.log(power(10, 4));
