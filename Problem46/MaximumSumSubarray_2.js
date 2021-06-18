
function maxSumSubArray(nums){
    let sum=0,curSum=0;
    for(let i=0;i<nums.length;++i){
        curSum+=nums[i];
        if(curSum<0){
            curSum=0;
        }
        sum=Math.max(curSum,sum);
    }

    return sum;
}

console.log(maxSumSubArray([1,-2,3,-1,2]))