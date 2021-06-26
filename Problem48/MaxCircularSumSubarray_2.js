
function getMaxSum(nums){
    let sum=nums[0];
    let maxCurr=nums[0];
    for(let i=1;i<nums.length;++i){
        maxCurr=Math.max(maxCurr+nums[i],nums[i]);
        sum=Math.max(maxCurr,sum);
    }

    return sum;
}

function maxCircularSum(nums){
    let negativeNums=[];
    let sum=0;

    let maxSum=getMaxSum(nums);
    for(let i=0;i<nums.length;++i){
        sum+=nums[i];
        negativeNums.push(-1*nums[i]);
    }
    let minSum=getMaxSum(negativeNums);
    return maxSum>sum+minSum?maxSum:sum+minSum;
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