function canSum(target,nums,memo={}){
    if(target in memo) return memo[target];
    if(target==0) return true;
    if(target<0) return false;
    for(let num of nums){
        let remainder=target-num;
        if(canSum(remainder,nums)){
            memo[target]=true;
            return true;
        }
    }
    memo[target]=false;
    return false;
}

console.log(canSum(7,[5,3,4,7]));

console.log(canSum(7,[1,4,5,1]));