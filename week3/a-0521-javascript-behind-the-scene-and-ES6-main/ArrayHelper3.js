var people = [
    {firstName: 'John', gender: 'Male'},
    {firstName: 'Bob', gender: 'Male'},
    {firstName: 'Nick', gender: 'Male'},
    {firstName: 'Sally', gender: 'Female'},
]

// var female = []
var male = []

for(var i = 0; i < people.length; i++){

    if(people[i].gender === 'Male'){
        male.push(people[i])
        // break;
    }
}

// console.log(female)
console.log(male)


console.log('-----------------');

var maleArr = people.filter(function(person){
    return person.gender === 'Female'
})

console.log(people)
console.log(maleArr)