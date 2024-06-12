const numberArray=[3,2,2,3]
const value=3

function removeElement(nums,val){
    let k=0
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i]
            k++
        }
    }
    console.log("Number",nums)
    return k
}


removeElement(numberArray,value)