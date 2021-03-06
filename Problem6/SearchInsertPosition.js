/*

https://leetcode.com/problems/search-insert-position/
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

*/


//JavaScript Solution

var searchInsert = function(nums, target) {
    let low=0,high=nums.length-1,mid;
    
    if(target>nums[nums.length-1]){
        return nums.length;
    }
    
    if(target<nums[0]){
        return 0;
    }
    
    while(high-low>1){
        mid=Math.floor((low+high)/2);
        console.log(`Low:${low},High:${high}`);
        if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid;
        }
    }
    
    if(nums[low]>=target){
        return low;
    }
    if(nums[high]>=target){
        return high;
    }
   
};

console.log(searchInsert([1,3,5,6],5));


//C++ Solution

/*
class Solution {
    public:
        int searchInsert(vector<int>& nums, int target) {
            auto a=lower_bound(nums.begin(),nums.end(),target);
            return a-nums.begin();
        }
    };
*/