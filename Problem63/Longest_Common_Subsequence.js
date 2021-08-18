
function longestCommonSubsequence(str1,str2,m,n){
    if(m==0 || n==0){
        return 0;
    }

    if(str1[m-1]===str2[n-1]){
        return 1 + longestCommonSubsequence(str1,str2,m-1,n-1);
    }
    else{
        return Math.max(longestCommonSubsequence(str1,str2,m-1,n),longestCommonSubsequence(str1,str2,m,n-1));
    }
}

console.log(longestCommonSubsequence('AXYZ','BAZ',4,3));