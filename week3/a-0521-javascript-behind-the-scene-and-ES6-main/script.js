var num1 = 5; //global variable - global scope
console.log(num1)

function a(){
    
    var num1 = 10 //local variable (local to func a)
    console.log(num1)
    
    function b(){
        
        var num1 = 15;
        console.log(num1)
    }

    b();
}

a();

// console.log(num1)
// var num1 = 5;
// function a(){
//     num1 = 10
//     function b(){
//         console.log(num1)
//     }
//     b();
// }
// a();

