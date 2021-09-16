const students = [
{
    name: 'John',
    score1: 47,
    score2: 46

},
{
    name: 'Bob',
    score1: 23,
    score2: 24

},
{
    name: 'Nick',
    score1:40,
    score2:35

},
{
    name: 'Alex',
    score1:44,
    score2:45

}
]

const pass=[91,81,71,61,51]
const degrees=['A','B','C','D','E']

function calculateTotal(score1,score2){
    let total= score1 + score2
    return total
}
//  console.log(calculateTotal(students[0].score1,students[0].score2))
for(let student of students){
    let calculateTotalForEachOne=calculateTotal(student.score1,student.score2)
    // console.log(calculateTotalForEachOne)
}
function evaluation (){
    for(let i=0; i< students.length; i++){
       let eachTotal= calculateTotal(students[i].score1,students[i].score2)
       if(eachTotal >= pass[4]){
        //    console.log(`pass the exam`)
           for(let x=0; x< pass.length; x++){
               if(eachTotal >= pass[x]){
                   console.log(`${students[i].name} ${degrees[x]}`)
                   break;
               }
           }
       }else{
           console.log(`${students[i].name} failed`)
       }
    }
}

evaluation()


students.forEach(function(param){
    let total=param.score1 + param.score2
    // console.log(`${param.name}: ${total}`)
    if(total > pass[0]){
        console.log(`${param.name} pass the exam with degree : ${degrees[0]}`)
    }else if(total > pass[1]){
        console.log(`${param.name} pass the exam with degree : ${degrees[1]}`)
    }else if(total > pass[2]){
        console.log(`${param.name} pass the exam with degree : ${degrees[2]}`)
    }else if(total > pass[3]){
        console.log(`${param.name} pass the exam with degree : ${degrees[3]}`)
    }else if(total > pass[4]){
        console.log(`${param.name} pass the exam with degree : ${degrees[4]}`)
    }else{
        console.log(`${param.name} doesn't pass the exam`)
    }
})
