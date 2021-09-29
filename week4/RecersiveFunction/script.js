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

//Recursive Function productOfArray
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
//Second Recursive Function productOfArray
// const productOfArray = ([first, ...last]) => {
//   if (first === undefined) {
//     return 1;
//   }
//   return first * productOfArray(last);
// };

console.log(productOfArray([1, 1, 2, 3]));
//Recursive Function reverse teacher approch
// function reverse(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   return reverse(str.slice(1)) + str[0];
// }

//Recursive Function reverse
function reverse(str) {
  if (str.length === 0) {
    return "";
  }
  let char = str.split("").pop();
  return char + reverse(str.substring(0, str.length - 1));
}

console.log(reverse("Azar"));
console.log(reverse("hello"));

//Easy way ;)
// function isPalindrome(str) {
//   let reversestr = reverse(str);
//   if (str === reversestr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("amanaplanacanalpanama"));

//Recursive Function isPalindrome teacher approch
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
}
//Recursive Function isPalindrome
// function isPalindrome(str) {
//   if (str.length === 1) {
//     return true;
//   }
//   if (str.split("").pop() === str.split("").shift()) {
//     return isPalindrome(str.substring(1, str.length - 1));
//   } else {
//     return false;
//   }
// }
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("a"));
console.log(isPalindrome("azar"));
console.log(isPalindrome("tacocat"));
