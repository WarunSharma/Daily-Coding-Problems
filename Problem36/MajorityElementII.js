
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
    let length=nums.length;
    let set = new Set();
    if(length<=2){
        if(length==0 || length==1)
            return nums;
        else
            {
                if(nums[0]==nums[1]){
                    return [nums[0]];
                }
                else{
                    return nums;
                }
            }    
    }
    nums.sort((a,b)=>a-b);
    let element=nums[0];
    let occurence=1;
    for(let i=1;i<length;++i){
        console.log(element,':',occurence);
         
        if(element==nums[i]){
            ++occurence;
        }
        else{
            element=nums[i];
            occurence=1;
        }
        if(occurence>Math.floor(length/3)){
            set.add(element);
        }

    }
    let res=[];
    for(let i of set){
        res.push(i);
    }

    return res;
}

console.log(getMajorityElementII([1,2,2,2,3,3,3]));
console.log('******************************');
console.log(getMajorityElementII([1,2]));