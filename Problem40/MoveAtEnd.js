
function MoveAtEnd(nums,target){
    for(let i=0;i<nums.length;++i){
        if(nums[i]==target){
            for(let j=i+1;j<nums.length;++j){
                if(nums[j]!=target){
                    let temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                    break;
                }
            }
        }
    }
    return nums;
}

console.log(MoveAtEnd([1,0,1,9,3,0,2,4,0],1))