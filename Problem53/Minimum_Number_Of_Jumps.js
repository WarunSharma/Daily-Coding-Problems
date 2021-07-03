
/*


https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

Minimum number of jumps 
Medium Accuracy: 32.96% Submissions: 100k+ Points: 4
Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
Note: Return -1 if you can't reach the end of the array.


Example 1:

Input:
N = 11 
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
Output: 3 
Explanation: 
First jump from 1st element to 2nd 
element with value 3. Now, from here 
we jump to 5th element with value 9, 
and from here we will jump to last. 
Example 2:

Input :
N = 6
arr = {1, 4, 3, 2, 6, 7}
Output: 2 
Explanation: 
First we jump from the 1st to 2nd element 
and then jump to the last element.

Your task:
You don't need to read input or print anything. Your task is to complete function minJumps() which takes the array arr and it's size N as input parameters and returns the minimum number of jumps. If not possible returns -1.


Expected Time Complexity: O(N)
Expected Space Complexity: O(1)


Constraints:
1 ≤ N ≤ 107
0 ≤ arri ≤ 107

*/

let minimumJumps=function(nums){
    let length=nums.length;

    let dp=new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    dp[0]=0;

    if(nums[0]==0 && nums.length>1){
        return -1;
    }
    else {
        for(let i=1;i<length;++i){
            for(let j=0;j<i;++j){
                if(dp[j]!=Number.MAX_SAFE_INTEGER && nums[j]+j>=i){
                    if(dp[j]+1<dp[i]){
                        dp[i]=dp[j]+1;
                    }
                }
            }
        }
    }
    
    if(dp[length-1]!=Number.MAX_SAFE_INTEGER){
        return dp[length-1];
    }
    return -1;

}


console.log('Testcase1');
console.log(minimumJumps([1,2,3,4,5,6]));

console.log('Testcase2');
console.log(minimumJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

console.log('Testcase3');
console.log(minimumJumps([1, 4, 3, 2, 6, 7]));