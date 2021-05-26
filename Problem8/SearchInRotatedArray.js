/*
https://leetcode.com/problems/search-in-rotated-sorted-array
*/
function searchInARotatedArray(arr,target){
    let low=0,high=arr.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[low]<arr[mid]){
            if(target>=arr[low] && target<=arr[mid]){
                high=mid;
            }
            else{
                low=mid;
            }
        }
        else{
            if(target>=arr[mid] && target<=arr[high]){
                low=mid;
            }
            else{
                high=mid;
            }
        }
    }    

    if(arr[low]==target)
        return low;
    if(arr[high]==target)
        return high;
            
    return -1;    
}



console.log(searchInARotatedArray([4,5,6,7,0,1,2,3],3));