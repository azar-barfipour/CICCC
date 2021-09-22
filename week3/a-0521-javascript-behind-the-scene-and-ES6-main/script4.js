// console.log({} === {})
// console.log(1 === 1)

var c = {
    name: 'John'
}

var d = c;


c.name = 'Eric'

c = {
    name: 'Bob'
}



console.log('c:',c);
console.log('d:',d);
console.log(window)
