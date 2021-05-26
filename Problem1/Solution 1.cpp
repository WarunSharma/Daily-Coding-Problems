#include <iostream>


using namespace std;

bool pairExists(int A[],int arr_size,int k)

{
    
for(int i=0;i<arr_size-1;++i)
    
{
        
for(int j=i+1;j<arr_size;++j)
        
{
            
if((A[i]+A[j])==k)
            
return true;
        
}
    
}
    
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
    
if(pairExists(A,arr_size,k))
    
cout<<"Pair Exists";
    
else
    
cout<<"Pair don't exists";
    
return 0;

}
