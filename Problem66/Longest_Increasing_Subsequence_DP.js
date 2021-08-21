
/*
https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/
*/

function lIS(arr){
    let memo=new Array(arr.length);

    memo[0]=1;

    let maxCount=0;

    for(let i=1;i<arr.length;++i){
        let count=1;
        for(let j=0;j<i;++j){
            if(arr[i]>arr[j] && memo[j]+1>count){
                count=memo[j]+1;
            }
        }
        memo[i]=count;
        maxCount=Math.max(count,maxCount);
    }

    return maxCount;

}

console.log(lIS([10,22,9,33,21,50,41,60,50,1]));

console.log(lIS([3, 10, 2, 1, 20]));

console.log(lIS([50, 3, 10, 7, 40, 80]));