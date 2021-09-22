var people = [
  { firstName: 'John', age: 28 },
  { firstName: 'Bob', age: 20 },
  { firstName: 'Nick', age: 25 },
  { firstName: 'Sally', age: 18 }
]

var everyPersonCanVote = true;
var onlySomePersonCanVote = false;

for(var i = 0; i < people.length; i++){

    if(people[i].age < 20){

        everyPersonCanVote = false;
        onlySomePersonCanVote = true;
    }
}

console.log(`Every person can vote - ${everyPersonCanVote}`);
console.log(`Only some people can vote - ${onlySomePersonCanVote}`);

console.log('---------------------');


var x = 0;

var every = people.every(function(person){
    console.log(++x + ' - ' + (person.age >= 20));
    return person.age >= 20
})

console.log(every);

var y = 0

var some = people.some(function(person){
    console.log(++y + ' - ' + (person.age >= 20));
    return person.age >= 20
})

console.log(some);