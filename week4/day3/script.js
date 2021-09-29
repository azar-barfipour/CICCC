//sorting
const letter = ["m", "a", "d", "z", "p", "i", "e"];
const nums = [1, 5, 8, 11, 4, 2];

console.log(letter);
letter.sort();
console.log(letter);

nums.sort();
console.log(nums); // check aski

nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);

//bubble sorting
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        //swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
bubbleSort(numbers);
console.log(numbers);

//selection sort
function selectionSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        let temp = arr[i]
        for(let j=i+1; j< len; j++){
            if(arr[j]<arr[min]){
                min = j
            }
            arr[i] = arr[min]
            arr[min] = temp
        }
        return arr

}
selectionSort(numbers);
console.log(numbers);
