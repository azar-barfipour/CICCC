// function isAscending(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const isAscending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
};
// function isDescending(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const isDescending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      return false;
    }
  }
  return true;
};
// function isSort(arr) {
//   //fisrt approch
//   if (isAscending(arr) === false && isDescending(arr) === false) {
//     return "Not Sorted";
//   } else if (isAscending(arr) === true) {
//     return "Ascending";
//   } else if (isDescending(arr) === true) {
//     return "Descending";
//   }
// }

// function isSort(arr) {
//   //second approch
//   if (isAscending(arr) === false && isDescending(arr) === false) {
//     return false;
//   } else {
//     return true;
//   }
// }

const isSort = (arr) => {
  //second approch
  if (isAscending(arr) === false && isDescending(arr) === false) {
    return false;
  } else {
    return true;
  }
};

console.log(isSort([]));
console.log(isSort([42]));
console.log(isSort([39, 42]));
console.log(isSort([42, 39]));
console.log(isSort([1, 2, 3, 4, 5]));
console.log(isSort([5, 4, 3, 2, 1]));
console.log(isSort([1, 5, 2]));
