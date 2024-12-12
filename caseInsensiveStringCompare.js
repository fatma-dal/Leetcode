//a function that compare the case insensitive strings given by the user 
//1- changing the two strings to uppercase strings to make sure that all the chrs in the same casing style 
//2-if string1 equal to string2 we return  true else we return false  

function caseInsensitiveStringCompare(strA,strB){
    str1=strA.toUpperCase()
    str2=strB.toUpperCase()
    if (str1==str2){
        return true
    }else {
        return false
    }
}
console.log(caseInsensitiveStringCompare('ddqcd','Frdsrz'))



// second way :
//a function that compare the case insensitive strings given by the user 
// 1-comparing the lenght of the tow strings if it 's diffrent we return false .
// 2-changing the two strings to upper case to make sure all chrs are have se same casing (upper case ) 
// 3-looping inside the strings comparing the first and the last indexs if they are all the same we return true 
// 4- if they're diffrent we return false 

function caseInsensitiveStringCompare(strA,strB){
    if (strA.lenght()==strB.lenght()){
        str1=strA.toUpperCase()
        str2=strB.toUpperCase()
        for (var i=0;i>strA.lenght-1;i++){
            
        }
    }else{
        return false 
    }
}
