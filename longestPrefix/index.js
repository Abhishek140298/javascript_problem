


const longestCommonPrefix=(strs)=>{
    let refStr = strs[0];
     
    if(strs.length>=2) { 
    
   for(let i=1;i<strs.length;i++){
           console.log("Remeber the name",)
     let newstr=''
       
       let strLength=strs[i]!==undefined? strs[i].length:0
       console.log("Remeber the name",strLength)
       if(strLength!==0){
       for(let j=0;j<strLength;j++){
       if(refStr[j]===strs[i][j]){
           newstr+=refStr[j]
           console.log("New string",newstr)
           if(j===strLength-1){
               refStr=newstr
           }
       }
       else {
           console.log("Refrence error",newstr,refStr)
           refStr=newstr
       }
           
    }
   }
   else{
   refStr=''
   }
    
    }
   
};

  return refStr  
}


let strs=["a","b"]

const commonPrefix=longestCommonPrefix(strs)