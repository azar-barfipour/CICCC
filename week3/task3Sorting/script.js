function isAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
function isDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      return false;
    }
  }
  return true;
}
function isSort(arr) {
  console.log(arr);
  if (isAscending(arr) === false && isDescending(arr) === false) {
    return "not sorted";
  } else if (isAscending(arr) === true) {
    return "Ascending";
  } else if (isDescending(arr) === true) {
    return "Descending";
  }
}

console.log(isSort([1, 2, 3, 10, 11, 12]));
console.log(isSort([1, 2, 3, 4, 5]));
console.log(isSort([5, 4, 3, 2, 1]));
console.log(isSort([1, 2, 3, 10, 4, 5]));
console.log(isSort([1, 2, 3, 10, 11, 12]));
