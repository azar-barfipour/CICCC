const str='Hello World'

//get length
console.log(str.length)

//change case
console.log(str.toUpperCase())

//get substring
console.log(str.substring(0,5))

//split into arrays
console.log(str.split(' '))
console.log(str.split(''))
console.log(str.split('l'))

//Array
const numbers = [1,2,3,4,5]
const fruits = ['apples','lemon','oranges']

console.log(fruits)
console.log(fruits[2])

//adding a value
fruits[3]= 'lemon'
console.log(fruits)

fruits.push('banana')
console.log(fruits)

//remove the last
const removed= fruits.pop()
console.log(removed)
console.log(fruits)

//add the begigning
fruits.unshift('strawberry')
console.log(fruits)
//remove the begining
fruits.shift()
console.log(fruits)

//check if array
console.log(typeof fruits)
console.log(Array.isArray(fruits))

//get index
console.log(fruits.indexOf('oranges'))
console.log(fruits.indexOf('banana')) // there is not result: -1

// object literal
// {
//     property : value,
// }
const person = {
    firstName: 'azar',
    lastName: 'barfi',
    age: 45,
    hobbies: ['music','golf'],
    address: { //embeded object
        street: '355 Holdom',
        city: 'burnaby'
    }
}
 
console.log(person)
console.log(person.firstName)
console.log(person.address.city)
console.log(person.hobbies[1])

//add property
person.email= 'azar.barfipour@gmail.com'
console.log(person.email)

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompelete: false
    },
    {
        id:2,
        text:'Make dinner',
        isCompelete: false
    },
    {
        id:1,
        text:'Meet the boss',
        isCompelete: true
    }
]
console.log(todos[1].text)

//JSon
const JSONstring= JSON.stringify(todos)
console.log(JSONstring)// convert to json 
console.log(JSON.parse(JSONstring))

//loops

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
//for
for(let i=0; i<10; i++){
    // console.log(i)
}
//while
let i =0
while(i <=10){
    // console.log(i)
    i++
}
//do while
let x=0
do{
    console.log(x)
    x++
}
while(x<=10)

//loop array
//classic for
for(let i=0; i<todos.length; i++){
     console.log(`Todo ${i+1}: ${todos[i].text}`)
}

//For..of loop --- only arrays
for(let todo of todos){
console.log(todo)
}
for(let fruit of fruits){
    console.log(fruit)
    }
//For..in loop --- only objects
for(let prop in person){
    console.log(person[prop])
    }

//break and continue
for(let todo of todos){
    if(todo.id === 2){
        console.log(todo.text)
        break
        //continue
    }
    console.log(todo.id)
    }

//ForEach loops array
fruits.forEach(function(prams, index){
console.log(`${prams} : ${index}`)
})

//map() loops array and create a new array
const newToddosArray= todos.map(function(todo){
return todo.text
})
console.log(newToddosArray)
//shorthand
// const newToddosArray= todos.map(todo =>  todo.text)
    

//filter --- returns array base on condition
const newFilterTodos= todos.filter(function(todo){
   if(todo.id === 1){
       return true
   }
})
//shorthand
// const newFilterTodos= todos.filter(todo => todo.id === 1)

//too many conditionals
let color='red'
switch(color){
    case 'red' : 
    console.log('color is red')
    break
    case 'blsck' : 
    console.log('color is black')
    break
    case 'green' : 
    console.log('color is green')
    break
    case 'blue' : 
    console.log('color is blue')
    break
    default:
        console.log('color is not blue,black,green,red')
}


//ternary operator
(color==='red') ? 'red' : 'unknown'