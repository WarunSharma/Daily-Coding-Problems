
/*

https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

Move all negative numbers to beginning and positive to end with constant extra space
Difficulty Level : Easy
Last Updated : 09 Jun, 2021
An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
Note: Order of elements is not important here.

*/

let moveNegativeNumbersBeginning=function(nums){
    
    let low=0;
    let temp;

    for(let i=0;i<nums.length;++i){
        if(nums[i]<0){
            temp=nums[i];
            nums[i]=nums[low];
            nums[low]=temp;
            ++low;
        }
    }

    return nums;

}

console.log('Testcase1');
console.log(moveNegativeNumbersBeginning([-12, 11, -13, -5, 6, -7, 5, -3, -6]))