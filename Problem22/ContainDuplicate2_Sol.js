function containsDuplicate(nums,k,t){
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            const x = Math.abs(nums[i] - nums[j]);
            const y = Math.abs(i - j);
            
            if(x <= t && y <= k) {
                return true;
            }
        }
    }
    
    return false;
}

console.log(containsDuplicate([1,2,3,1],3,0));