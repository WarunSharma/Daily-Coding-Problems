/*

https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

//Moore's Voting algorithm
function getMajorityElement(arr){
    let majorityElement=arr[0];
    occurence=1;
    for(let i=1;i<arr.length;++i){
        if(arr[i]==majorityElement){
            ++occurence;
        }
        else{
            --occurence;
        }

        if(occurence==0){
            majorityElement=arr[i];
            occurence=1;
        }
    }  

    return majorityElement;
}

console.log(getMajorityElement([1,2,2,2,3,3,3,2,2,3,3,3,3]));