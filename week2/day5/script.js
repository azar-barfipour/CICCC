//this object

function a(){
    console.log('a is pointing to :' ,this)
    console.log(this === window)
    function b(){
        console.log('b is pointing to :' ,this)
        console.log(this === window)
    }
    b()
}
a()

var person = {
    firstName: 'Azar',
    lastName: 'Barfipour',
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.getFullName())