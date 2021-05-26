


function getMinElement(arr){
    let low=0,high=arr.length-1,mid;

    while(high-low>1){
        mid=Math.floor((low+high)/2);
        if(arr[mid]<arr[high]){
            high=mid;
        }
        else{
            low=mid;
        }
    }

    if(arr[low]>arr[high]){
        console.log(arr[high]);
    }
    else{
        console.log(arr[low]);
    }
}


getMinElement([3,4,5,1,2]);