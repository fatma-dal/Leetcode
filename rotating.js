//function that rotate chrs in a string by an amount given by the user
//if the amount given by the user equal to zero we return the str
//if the amount given by the user biger than the amount we reset the value of the amount to amount-length 
//we loop inside the string from the last chrs stepping back by one step till the (length-1)-amount


function rotateStr(str,amount){
    if (amount > length) {
        amount -=lenght
    }
    if(amount==0){
        return str
    }
    for (var i=str.length-1;i<str.lenght-1-amount;i--){
        str[0]=str[length-1]
    }
    return str
}
var test=rotateStr("hello world",2)
console.log(test)














































