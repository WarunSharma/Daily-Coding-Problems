/*

https://leetcode.com/problems/intersection-of-two-arrays-ii/
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

*/

let getIntersection=(arr1,arr2)=>{
    let res=[],m;
    let map=new Map();
    arr1.map(a=>{
        if(map.has(a))
        {
            m=map.get(a);
            map.set(a,++m);
        }
        else
            map.set(a,1);
    });

    // for(let [key,val] of map.entries()){
    //     console.log(`${key},${val}`);
    // }

    arr2.map(a=>{
        if(map.get(a)>0)
        {
            res.push(a);
            m=map.get(a);
            console.log(m);
            map.set(a,--m);
        }
    });

    return res;
}

console.log(getIntersection([1,2,2,3,4],[2,2]));
console.log(getIntersection([4,9,5],[9,4,9,8,4]));