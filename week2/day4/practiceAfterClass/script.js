

// function getSize(width,height,depth){
//     const area = width * height
//     const volume = width * height * depth
//     return [area,volume]
// }

const getSize = function(width,height,depth){
    const area = width * height
    const volume = width * height * depth
    return [area,volume]
}
console.log(getSize(1,2,3)[1])
console.log(getSize(1,2,3)[0])

const person = {
    firstName: 'Azar',
    lastName: 'Barfipour',
    age: 30,
    getInfo : function(){
        console.log(`myname is: ${this.firstName} ${this.lastName} and I'm ${this.age} years old`)
    } 
}
person.getInfo();

person.firstName = 'Azi'
person.getInfo();
