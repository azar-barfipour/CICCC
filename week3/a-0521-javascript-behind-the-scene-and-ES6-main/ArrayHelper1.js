var names = ['Alex','Mary','John','Jane']

for(var i = 0; i < names.length; i++){
    console.log(`My name is ${names[i]}`)
}

console.log('--------------------');

names.forEach(function(name){
    console.log(`My name is ${name}`)
})
