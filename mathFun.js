// we prepare the tabale of answers (liferanswer[])
// we create a function that gives random answers for the users (randomAnswer())
// we put a random number that's greater than or equal to 0 and less than 1 inside a var answer 
// answer*times the lenght of the table 
// each answer is saved inside an index always rounds down and returns the largest integer less than or equal to a given number.
// we return the value of the index  

var liferanswer=["yes","no","ok","yup","nup" ]

function randomAnswer(){
    var answer=Math.random()*liferanswer.length
    var i=Math.floor (answer) 
    return liferanswer[i]


}
console.log(randomAnswer())
