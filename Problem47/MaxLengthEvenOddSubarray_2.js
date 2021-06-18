
function maxLengthEvenOddSubArray(nums){
    let res=0;
    let curr=1;
    for(let i=1;i<nums.length;++i){
        if((nums[i-1]%2==0 && nums[i]%2==1) || (nums[i-1]%2==1 && nums[i]%2==0)){
            ++curr;
            res=Math.max(res,curr);
        }
        else{
            curr=1;
        }

    }
    return res;
}

console.log(maxLengthEvenOddSubArray([1,2,3,5,7]));
console.log(maxLengthEvenOddSubArray([5,20,30,6,3,8]));