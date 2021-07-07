
let countPairs=function(arr,n,k){
         arr=arr.split(' ');
         let left=0,right=n-1,count=0;
        //  for(let i=0;i<n-1;++i){
        //      for(let j=i+1;j<n;++j){
        //          if(parseInt(arr[i])+parseInt(arr[j])==k)
        //             console.log(arr[i],arr[j]);
        //             ++count;
        //      }
        //  }
        let map=new Map();
        for(let i=0;i<n;++i){
            if(map.has(parseInt(arr[i]))){
                let temp=map.get(parseInt(arr[i]));
                map.set(parseInt(arr[i]),temp+1);
            }
            else{
                map.set(parseInt(arr[i]),1);
            }
        }
        for(let i=0;i<n;++i){
            if(parseInt(arr[i])==k/2 && map.get(parseInt(arr[i]))>0){
                count+=map.get(parseInt(arr[i]))-1;
                map.set(parseInt(arr[i]),0);
                continue;
            }
            if(map.get(parseInt(arr[i]))>0 && map.get(k-parseInt(arr[i]))>0){
                count+=map.get(parseInt(arr[i]))*map.get(k-parseInt(arr[i]));
                map.set(parseInt(arr[i]),0);
                map.set(k-parseInt(arr[i]),0);
            }
        }
        return count;
    }

console.log(countPairs('46 22 14 97 22 67 30 95 23 30 6 17 40 69 60 97 70 66 45 32 13 4 74 40 61 49 2 23 96 55 17 93 28 30 41 2 96 70 96 18 51 53 86',43,44));
