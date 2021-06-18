
function maxSumSubArray(nums){
    let sum=0;
    for(let i=0;i<nums.length-1;++i){
        let curSum=0;
        for(let j=i;j<nums.length;++j){
            curSum+=nums[j];
            if(curSum>sum){
                sum=curSum;
            }
        }
    }

    return sum;
}

console.log(maxSumSubArray([1,-2,3,-1,2]))