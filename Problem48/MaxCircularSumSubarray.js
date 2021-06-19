
function maxCircularSum(nums){
    let sum=nums[0];
    for(let i=0;i<nums.length;++i){
        let curSum=nums[i];
        let curMax=nums[i];
        for(let j=1;j<nums.length;++j){
            let idx=(i+j)%nums.length;
            curSum+=nums[idx];
            curMax=Math.max(curSum,curMax);
        }
        sum=Math.max(curMax,sum);
    }
    return sum;
}

console.log(maxCircularSum([-1,2,3,-1,-2,4]));
console.log(maxCircularSum([5,-2,3,4]));
console.log(maxCircularSum([2,3,-4]));
console.log(maxCircularSum([8,-4,3,-5,4]));
console.log(maxCircularSum([-3,4,6,-2]));
console.log(maxCircularSum([-8,7,6]));
console.log(maxCircularSum([3,-4,5,6,-8,7]));
console.log(maxCircularSum([-1]));
console.log(maxCircularSum([-2,-1]));