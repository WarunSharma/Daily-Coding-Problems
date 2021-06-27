
/*


https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

Union of two arrays 
Basic Accuracy: 52.81% Submissions: 45356 Points: 1
Given two arrays a[] and b[] of size n and n respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in union.

Example 1:

Input:
5 3
1 2 3 4 5
1 2 3

Output: 
5

Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.
Example 2:

Input:
6 2 
85 25 1 32 54 6
85 2 

Output: 
7

Explanation: 
85, 25, 1, 32, 54, 6, and
2 are the elements which comes in the
union set of both arrays. So count is 7.
Your Task:
Complete doUnion funciton that takes a, n, b, m as parameters and returns the count of union elements of the two arrays.The printing is done by the driver code.

Constraints:
1 ≤ n, m ≤ 105
1 ≤ a[i], b[i] < 105

Expected Time Complexity : O((n+m)log(n+m))
Expected Auxilliary Space : O(n+m)

*/


/*
* Time Complexity: O(n) or O(m)
* Space Complexity: O(n+m)
*/

let unionOfTwoArray=function(nums1,nums2){
    let set=new Set();

    nums1.map(el=>{
        set.add(el);
    });

    nums2.map(el=>{
        set.add(el);
    });

    let res=[];

    for(let i of set){
        res.push(i);
    }

    return res;
}

console.log('Testcase1');
console.log(unionOfTwoArray([1, 2, 3, 4, 5],[1, 2, 3]));