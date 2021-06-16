
function maximumDifference(nums){
    let res=nums[1]-nums[0];
    let minValue=nums[0];
    for(let i=1;i<nums.length;++i){
        res=Math.max(res,nums[i]-minValue);
        minValue=Math.min(minValue,nums[i]);
    }

    return res;
}

console.log(maximumDifference([2,3,10,3,4,8,9]));