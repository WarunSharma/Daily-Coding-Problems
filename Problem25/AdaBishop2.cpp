#include <iostream>
using namespace std;

void printPath(){
    cout<<"1 "<<"1"<<endl;
    cout<<"8 "<<"8"<<endl;
    cout<<"7 "<<"7"<<endl;
    cout<<"6 "<<"8"<<endl;
    cout<<"1 "<<"3"<<endl;
    cout<<"3 "<<"1"<<endl;
    cout<<"8 "<<"6"<<endl;
    cout<<"7 "<<"5"<<endl;
    cout<<"8 "<<"4"<<endl;
    cout<<"5 "<<"1"<<endl;
    cout<<"1 "<<"5"<<endl;
    cout<<"4 "<<"8"<<endl;
    cout<<"3 "<<"7"<<endl;
    cout<<"2 "<<"8"<<endl;
    cout<<"1 "<<"7"<<endl;
    cout<<"7 "<<"1"<<endl;
    cout<<"8 "<<"2"<<endl;
}

int main() {
	int t;
	cin>>t;
	while(t--){
	    int r0,c0;
	    cin>>r0>>c0;
	    if(r0==c0){
	        if(r0==1 && c0==1){
	            cout<<"17\n";
	            printPath();
	        }
	        else{
	            cout<<"18\n";
	            cout<<r0<<" "<<c0<<endl;
	            printPath();
	        }
	    }
	    else{
	        cout<<"19\n";
	        int d=(r0+c0)/2;
	        cout<<r0<<" "<<c0<<endl;
	        cout<<d<<" "<<d<<endl;
	        printPath();
	    }
	}
	return 0;
}
