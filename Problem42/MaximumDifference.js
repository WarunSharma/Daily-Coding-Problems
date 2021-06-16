
function maximumDifference(nums){
    let res=nums[1]-nums[0];
    for(let i=0;i<nums.length-1;++i){
        for(let j=i+1;j<nums.length;++j)
        {
            res=Math.max(res,nums[j]-nums[i]);
        }
    }

    return res;
}

console.log(maximumDifference([2,3,10,3,4,8,9]));