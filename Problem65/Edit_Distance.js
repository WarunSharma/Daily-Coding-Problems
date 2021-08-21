
/*
https://www.geeksforgeeks.org/edit-distance-dp-5/
*/

function editDistance(str1,str2,m,n){

    if(m==0)
        return n;

    if(n==0)
        return m;

    if(str1[m-1]==str2[n-1]){
        return editDistance(str1,str2,m-1,n-1);
    }

    return 1 + Math.min(editDistance(str1,str2,m-1,n-1), //Replace
    editDistance(str1,str2,m-1,n), //Delete
    editDistance(str1,str2,m,n-1)) //Insert
}


console.log(editDistance('geek','gesek',4,5));

console.log(editDistance("sunday","saturday",6,8));

console.log(editDistance('Warun','Shubham',5,7));