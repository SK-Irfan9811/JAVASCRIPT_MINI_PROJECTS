import java.util.*;
class Solution{
    public static void main(String ar[]){
        Scanner sc=new Scanner(System.in);
        int T=sc.nextInt();
        for(int i=0;i<T;i++){
            int N=sc.nextInt();
            int a=0;
            int c=0;
            int max=-1;
            int arr[]=new int[N];
            for(int j=0;j<N;j++){
                arr[j]=sc.nextInt();
            }
            if(N==1)
                System.out.println("Case #"+(i+1)+": "+1);
            else{    
            while(a<N-1){
                
                if(a+1<N && arr[a]>arr[a+1] && arr[a]>max)
                    c++;
                if(max<arr[a])
                    max=arr[a];    
                a++;    
                   
            }
            System.out.println(max);
            if(arr[N-1]>max)
                c++;
            System.out.println("Case #"+(i+1)+": "+c);
        }
    }
}
}