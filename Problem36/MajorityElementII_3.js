

/*

https://leetcode.com/problems/majority-element-ii/
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109

*/

function getMajorityElementII(nums){
    let num1=-1,num2=-2,occurence1=0,occurence2=0;

    for(let i=0;i<nums.length;++i){
        if(nums[i]==num1){
            ++occurence1;
        }
        else if(nums[i]==num2){
            ++occurence2;
        }
        else if(occurence1==0){
            num1=nums[i];
            ++occurence1;
        }
        else if(occurence2==0){
            num2=nums[i];
            ++occurence2;
        }
        else{
            --occurence1;
            --occurence2;
        }
    }

    occurence1=0,occurence2=0;
    let res=[];
    for(let i=0;i<nums.length;++i){
        if(nums[i]==num1){
            occurence1++;
        }
        if(nums[i]==num2){
            occurence2++
        }
    }

    if(occurence1>Math.floor(nums.length/3)){
        res.push(num1);
    }

    if(occurence2>Math.floor(nums.length/3)){
        res.push(num2);
    }

    return res;
}

console.log(getMajorityElementII([1,2,2,2,3,3,3]));
console.log('******************************');
console.log(getMajorityElementII([1,2]));
console.log('******************************');
console.log(getMajorityElementII([1]));
console.log('******************************');
console.log(getMajorityElementII([1,1]));