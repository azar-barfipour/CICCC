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
