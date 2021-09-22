var numbers = [100,200,300];

var sum = 0;

for(var i = 0; i < numbers.length; i++){
    // sum = sum + numbers[i];
    sum += numbers[i];
}

console.log(sum)

console.log('-----------------');

var total = numbers.reduce(function(previous, number){
    return previous + number;
})

console.log(total);


console.log('-----------------');


var weeklyEarnings = [1,2,3,4];

var income = weeklyEarnings.reduce(function(prev, curr){
    return prev + curr
}, )

console.log(income);


console.log('-----------------');

var firstnames = ['John','Mary','Joseph']
var lastnames = ['Smith','Doe','Brown']

var fullnames =  firstnames.reduce(function(previous, firstname, index){
    previous.push(`${firstname} ${lastnames[index]}`)

    // console.log(previous);
    return previous
}, [])

console.log(fullnames);