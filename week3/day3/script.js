// const numbers = [2,4,6,8]

// // let double = numbers.map((number) => (number * 2))//shorthand

// let double = numbers.map((number) => {
//     return number * 2
// })

// console.log(double)

// // var person = {
// //     firstName: 'azar',
// //     lastName : 'barfi',
// //     sayFullName: function(){
// //         return () => {
// //             console.log(`${this.firstName} ${this.lastName}`)
// //         }

// //     }
    
// // }
// // person.firstName

// function person(firstName = 'azar',lastName = 'bafi',profession = 'weber'){ // put defaults values
//     console.log(`${firstName} ${lastName} ${profession}`)
// }
// person('sally')

// // spread operator 

// const number1 = [1,2,3,4]

// const number2 = [5,6,7,8]

// let number3 = []

// number3.push(10)
// // number3 = number1.concat(number2)
// console.log(number3)



// //ES6
// const number4 = [...number1,100,...number2, ...number3]
// console.log(...number4)
// console.log(number4)


// //
// const copyArr = number1
// console.log(copyArr)

// number1.push(5)
// console.log(copyArr)


// const copyArr2 = [].concat(number1)//making new array
// number1.push(55)
// console.log(number1)
// console.log(copyArr2)

// const copyArr3 = [...number1]//making new array
// number1.push(55)
// console.log(number1)
// console.log(copyArr3)


// //arguments => show arguments

// const b = (x,y, ...rest) => {
//     console.log(x+y+rest[0]+rest[1])
// }
// b(10,20,30,40,50,60)

// const family = (lastName, ...names) => {
//     console.log(names)
// }
// family('bb', 'sxs','sxx','sxsx')


var obj = {
    name: 'Bob',
    age: 30,
        definieThis: function(){
            function a(){
            console.log (this === obj)
        }
        a()
    },
}

obj.definieThis()