
const insertionSort = arr =>{
    for (let i=0;i<arr.length; i++){
                let temp=arr[i]
        for (let j=i-1;j>=0;j--){
            if (arr[j]>arr[j+1]){
                arr[j+1]=arr[j]
                arr[j]=temp
                
            }
        }
    }
    return arr
    }
    console.log(insertionSort([5,8,3,1,7,2]))