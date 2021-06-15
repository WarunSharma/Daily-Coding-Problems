
function getMaxSumSubArray(nums,k){
    let sum=0;
    for(let i=0;i<k;++i){
        sum+=nums[i];
    }

    let curSum=0;
    for(let i=k;i<nums.length;++i){
        curSum=sum-nums[i-k]+nums[i];
        if(curSum>sum){
            sum=curSum;
        }
    }

    return sum;
}


console.log(getMaxSumSubArray([4,3,1,5,2],3));