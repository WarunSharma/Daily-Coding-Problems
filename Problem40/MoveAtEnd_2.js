

function MoveAtEnd(nums,target){
    let count=0;
    for(let i=0;i<nums.length;++i){
       if(nums[i]!=target){
           let temp=nums[i];
           nums[i]=nums[count];
           nums[count]=temp;
           ++count;
       } 
    }
    return nums;
}

console.log(MoveAtEnd([1,0,1,9,3,0,2,4,0],1))
console.log(MoveAtEnd([1,0,1,9,3,0,2,4,0],0))