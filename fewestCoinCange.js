// 25 -> quater  
// 10 -> dime
// 5 -> nickel
// 1 -> penny 

// 99: (3*25)+(2*10)+(1*4)

function fewestCoine(n){
    var dic={}
if (n%25  ==0 ){
    dic['quarter']=(n/25)
} else if((n%25)%10==0){
    dic[1]= (n%25)/10 
}else if (((n%25)%10)%5==0) {
    dic[3]=((n%25)%10)/5
}else if (((n%25)%10)%5==0){
    dic[4]= ((n%25)%10)/5 
}
return dic 
}

