//global variable
var name = 'John'

console.log(window.name)
console.log(this.name)
console.log(name)

//global function
function a(){
    return 'Hello'
}

console.log(window);
console.log(window.a());

//global object
var obj = {
    name: 'Nick',
    b: function(){
        return 'Hi'
    }
}

console.log(window);
console.log(obj.name);
console.log(obj.b());