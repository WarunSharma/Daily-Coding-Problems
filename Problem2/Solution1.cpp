#include <iostream>

using namespace std;
//Solution using division
int main()
{
     int arr_size,prod=1;
     cin>>arr_size;
     int A[arr_size];
     for(int i=0;i<arr_size;++i)
     {
        cin>>A[i];
        prod*=A[i];
     }
     cout<<prod;
     for(int i=0;i<arr_size;++i)
     {
         A[i]=prod/A[i];
     }
     for(int i=0;i<arr_size;++i)
     {
         cout<<A[i];
     }
     return 0;
}
