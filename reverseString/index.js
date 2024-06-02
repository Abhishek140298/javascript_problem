var reverseString = function(s) {
    console.log("Jaba",s)
let arrayLength=s.length-1
     let reverseString=[]
     console.log("array hai to hai",arrayLength)
     for(let i=arrayLength;i>=0;i--){
        reverseString.push(s[i])
       
     }
console.log("Reverse the st",reverseString)
 
    for (let j=0;j<s.length;j++){
        s[j]=reverseString[j]
    }
};


let sr=["h","e","l","l","o"]

reverseString(sr)

console.log("Reversed string",sr)