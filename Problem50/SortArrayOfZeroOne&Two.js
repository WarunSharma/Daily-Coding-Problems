
/*
https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

Sort an array of 0s, 1s and 2s 
Easy Accuracy: 51.36% Submissions: 88625 Points: 2
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
Example 2:

Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated 
into ascending order.

Your Task:
You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 <= N <= 10^6
0 <= A[i] <= 2
*/

let sortZeroOneTwo=function(nums){
    let low=0,mid=0,high=nums.length-1;
    let temp;

    while(mid<=high){
        if(nums[mid]==0){
            temp=nums[low];
            nums[low]=nums[mid];
            nums[mid]=temp;
            low++;
            mid++;
        }
        else if(nums[mid]==0){
            ++mid;
        }
        else{
            temp=nums[mid];
            nums[mid]=nums[high];
            nums[high]=temp;
            --high;
        }
    }

    return nums;
}

console.log('Testcase1');
console.log(sortZeroOneTwo([0 ,2 ,1 ,2 ,0]));

console.log('Testcase2');
console.log(sortZeroOneTwo([0 ,1 , 0]));

console.log('Testcase3');
console.log(sortZeroOneTwo([2,2]));

console.log('Testcase4');
console.log(sortZeroOneTwo([1, 1]));