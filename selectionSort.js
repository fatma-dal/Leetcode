// we need to loop throughthe arr 
// we want to find the smallest element ,but we're more concerned with it's index than it's value
// set the min index to i at the beginning of each iteration 
// we'll loop throught the remaining values
// if we find a number that is less than our current minimum
// set that number's index as minIndex
// if, after checking te minimum number's index ,we found a new minimum
// swap the new minimum with the value at i
// return the sorted array


const myArr=[3,2,7,9,4,6,]
const arrTest = [4,5,1,3,6,7,8,10]


const selectionSort = arr =>{
    for (let i=0;i<arr.length;i++){
        for (let j=i+1; j<arr.length;j++){
            if (arr[j]<arr[i]){
                let temp = arr[j]
                arr[j]=arr[i]
                arr[i]= temp
                
            }
        }
    }
    return  arr
}
console.log(selectionSort(arrTest))

