#include <iostream>
#include <bits/stdc++.h> 

using namespace std;

bool pairExists(int A[],int arr_size,int k)

{
    
int left=0,right=arr_size-1;
while(left<right)
{
            
if((A[left]+A[right])==k)
    return true;
else if((A[left]+A[right])>k)   
    right--;
else 
    left++;    
        
};
    
return false;

}

int main()

{
    int k;
    
int arr_size;
    
cin>>k>>arr_size;
    
int A[arr_size];
    
for(int i=0;i<arr_size;++i)
    
{
        
cin>>A[i];
    
}
sort(A,A+arr_size);  
if(pairExists(A,arr_size,k))
    
cout<<"Pair Exists";
    
else
    
cout<<"Pair don't exists";
    
return 0;

}
