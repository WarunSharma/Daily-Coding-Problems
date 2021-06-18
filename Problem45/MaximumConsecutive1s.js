
function maxConsecutive1s(nums){
    let max=0, curMax=0;
    for(let i=0;i<nums.length;++i){
        if(nums[i]==1){
            curMax++;
        }
        else{
            console.log(curMax)
            if(curMax>max){
                max=curMax;
            }
            curMax=0;
        }
    }
    return curMax>max?curMax:max ;
}

console.log(maxConsecutive1s([0,1,1,0,0,1,1,1]));