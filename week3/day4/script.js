// function sumDelta (arr){
//     let total = 0
//     for(let i = 0;i< arr.length - 1;i++){
//         let v1 = arr[i]
//         let v2 = arr[i+1]
//         let delta = Math.abs(v1-v2)
//         total += delta
//     }
//     return total
// }

// console.log(sumDelta([]))
// console.log(sumDelta([9]))
// console.log(sumDelta([12,8]))
// console.log(sumDelta([2,6,9,30]))

//----------------------------------------------

// function contains(arr , value){
//     for(let i=0; i<arr.length;i++){
//         if (arr[i] === value){
//             return true
//         }
//     }
//     return false
// }


// console.log(contains([],67))
// console.log(contains([14,15,16,22,32],67))
// console.log(contains([14,15,16,22,32,67],67))


//------------------------------------------------
// function isSorted(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i-1] > arr[i]){
//             return false
//         }
//     }
//     return true
// }


// console.log(isSorted([]))
// console.log(isSorted([1]))
// console.log(isSorted([1,2,3,4,5]))
// console.log(isSorted([1,2,4,3,5]))
// console.log(isSorted([100,300,50]))

//--------------------------------------------reverse string
// function reverse(str){
//     // return str.split('').reverse().join('') //solution1
//     //solusion2
//     let reversed = ''
//     for (let char of str){
//         reversed = char + reversed
//     }
//     return reversed
// }



// console.log(reverse('hello'))// olleh
// console.log(reverse('hi'))
// console.log(reverse('azar'))
//-------------------------------------------------
//anagram words

// function anagram(sideA,sideB){
//     const sideAmap = charMap(sideA)
//     const sideBmap = charMap(sideB)
//     if(Object.keys(sideAmap).length !== Object.keys(sideBmap).length){
//         return false
//     }
//     for(let char in sideAmap){
//         if(sideAmap[char] !== sideBmap[char]){
//             return false
//         }
//     }
//     return true
// }
// function charMap(str){
//     const charMapPlaceHolder = {}
//     let stringArr = str.replace(/[\W]/g,'').toLowerCase()

//     for(let char of stringArr){
//         if(charMapPlaceHolder[char]){
//             charMapPlaceHolder[char]++
//         }else{
//             charMapPlaceHolder[char] = 1
//         }
//     }
//     return charMapPlaceHolder
// }

// console.log(anagram('bad   credit','debit card'))
// console.log(anagram('hello','Olleh'))
// console.log(anagram('skdnfs','aoiejdoaijd'))

//fizzbuzz ------------------------------------
//multiples of 3 print "fizz"
//multiples of 5 print "buzz"
//multiples of 3 and 5 print "fizzbuzz"

function fizzbuzz(n){
    for(i=1;i<=n;i++){
        if(i % 3 === 0 && i%5 === 0){
            console.log("fizzbuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i%5 === 0){
            console.log("buzz")
        }
    }

}
fizzbuzz(15)
