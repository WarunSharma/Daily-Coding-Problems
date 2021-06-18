
function maxLengthEvenOddSubArray(nums){
    let res=0;
    for(let i=0;i<nums.length-1;++i){
        let curr=1;
        for(let j=i+1;j<nums.length;++j){
            if((nums[j-1]%2==0 && nums[j]%2==1) || (nums[j-1]%2==1 && nums[j]%2==0)){
                ++curr;
            }
            else{
                break;
            }
            res=Math.max(res,curr);
        }
    }
    return res;
}

console.log(maxLengthEvenOddSubArray([1,2,3,5,7]));