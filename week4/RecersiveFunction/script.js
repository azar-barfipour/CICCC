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
// function productOfArray(arr) {
//   console.log(arr);
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[arr.length] * productOfArray(arr[arr.length - 1]);
// }
const productOfArray = ([first, ...last]) => {
  if (first === undefined) {
    return 1;
  }
  return first * productOfArray(last);
};

console.log(productOfArray([1, 1, 2, 3]));

//Recursive Function reverse
function reverse(str) {
  if (str.length === 0) {
    return "";
  }
  let char = str.split("").pop();
  return char + reverse(str.substring(0, str.length - 1));
}

console.log(reverse("Azar"));

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

//Recursive Function isPalindrome
function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.split("").pop() === str.split("").shift()) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("a"));
console.log(isPalindrome("azar"));
console.log(isPalindrome("tacocat"));
