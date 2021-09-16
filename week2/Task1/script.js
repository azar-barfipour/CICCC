//1
const mattNumber=80;
const simonNumber=45;
console.log(`Matt number is: ${mattNumber} and Simon number is: ${simonNumber}`)
//2
const lower=51; 
//3,4,5,6
if(mattNumber>= lower && simonNumber>= lower){
    console.log("both students passed the exam")
}else if(mattNumber>= lower){
    console.log(`one of the students pass the exam. his name is Matt and his number is: ${mattNumber}`)
}else if(simonNumber>= lower){
    console.log(`one of the students pass the exam. his name is Simon and his number is: ${simonNumber}`)
}else{
    console.log("both failed")
}
//7
    if(mattNumber>= lower && simonNumber>= lower){
        console.log("both students passed")
    }else if(mattNumber>= lower && simonNumber<=lower){
        console.log("Matt passed and Simon failed")
    }else if(simonNumber>= lower && mattNumber<=lower){
        console.log("Simon passed and Matt failed")
    }else if(simonNumber<= lower && mattNumber<=lower){
        console.log("both students failed")
    }