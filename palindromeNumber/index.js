function palindromeNumber(number){
    var xString=x.toString()
    
    let indexN=xString.length-1
    let reverseS=''
   
    for(let i=indexN;i>=0;i--){
         reverseS+=xString[i]
    }
   
        
    let xP=parseInt(reverseS,10)
    if(xP===x){
        return true
    }
    else{
        return false
    }
}


let number=121

palindromeNumber(number)