/*

Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

*/

function longConcSeq(nums){
    if(nums.length==0 || nums.length==1){
        return nums.length;
    }
    
    nums.sort((a,b)=>a-b);
    let longest=1,curLongest=1;
    for(let i=1;i<nums.length;++i){
        
        if(nums[i]==nums[i-1]){
            
        }
        else if(nums[i]==nums[i-1]+1){
            ++curLongest;
        }
        else{
            curLongest=1;
        }
        longest=Math.max(longest,curLongest);
    }
    return Math.max(longest,curLongest);



}

console.log(longConcSeq([100,4,200,1,3,2]));
console.log(longConcSeq([0,3,7,2,5,8,4,6,0,1,1,8]));
console.log(longConcSeq([200,201,1,1,1,1,1,2,2,2,3,3,4,5,100,0]));