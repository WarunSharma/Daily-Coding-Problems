function searchInARotatedArrayWithDuplicateEle(arr,target){
    let low=0,high=arr.length-1,mid;
    while(high-low>1){
        mid=Math.floor((low+high)/2);

        if(arr[low]===arr[mid] && arr[high]===arr[mid]){
            low++;
            high--;
            continue;
        }
        if(arr[low]<=arr[mid]){
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

    console.log(`${low},${high}`);
    if(arr[low]===target){
        return true;
    }
    if(arr[high]===target){
        return true
    }
    return false
}

console.log(searchInARotatedArrayWithDuplicateEle([1,1,1,1,1,1,2,1,1,1,1],2));
console.log(searchInARotatedArrayWithDuplicateEle([0,0,1,1,2,0],2));
