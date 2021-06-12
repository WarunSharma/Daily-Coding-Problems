/*

https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

function getMajorityElement(arr){
    if(arr.length==1){
        return arr[0];
    }
    arr.sort((a,b)=>a-b)
    let mid,length=arr.length;
    if(length%2){
        mid=Math.floor(length/2);
    }
    else{
        mid=Math.floor(length/2);
    }
    let midElement=arr[mid];
    let occurrence=0;
    for(let i=0;i<length;++i){
        if(midElement==arr[i]){
            ++occurrence;
        }
    }

    return midElement;
}

console.log(getMajorityElement([3,3,3,,2,2,1]));