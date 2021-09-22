var names = ['Alex','Mary','John','Jane']

var numbers = [1,2,3,4,5];
// var newArr = [];
// console.log(numbers)
// console.log(newArr)

// for(var i = 0; i < numbers.length; i++){
//     newArr.push(numbers[i] * 10)
// }

// console.log(numbers)
// console.log(newArr)


console.log('----------------');


var mapArr = numbers.map(function(number){
    return number * 10
})
console.log(numbers)
console.log(mapArr);


console.log('----------------');

var people = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Bob', lastName: 'Brown'},
    {firstName: 'Nick', lastName: 'Smith'}
]

var getFirstName = people.map(function(person){
    // console.log(person)
    return person.firstName
})

console.log(getFirstName);
console.log(people);