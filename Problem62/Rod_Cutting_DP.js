
let max=Number.MIN_SAFE_INTEGER;
function rodCutting(arr,size,memo={}){
    if(memo[size]){
        return memo[size];
    }
    if(size==0){
        return 0;
    }

    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<size;++i){
        let ans=arr[i]+rodCutting(arr,size-i-1,memo);
        max=Math.max(max,ans);
        memo[size]=max;
    }

    
    console.log(JSON.stringify(memo));
    return max;
}

console.log(rodCutting([1, 5, 8, 9, 10, 17, 17, 20],8));