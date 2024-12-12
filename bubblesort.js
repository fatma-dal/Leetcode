





const nums1 = [5,2,1,3,8,9,7,6]
function bubbleSort(nums){
for (let i=0;i<nums.length;i++){
    let sorted = false 
    for (let j=0;j<nums.length-i-1;j++){
    if (nums[j]> nums[j+1]){
        let temp=nums[j]
        nums[j]=nums[j+1]
        nums[j+1]=temp
        sorted = true
    }
    if (!sorted){
        break
    }
}
}
return nums
}

console.log(bubbleSort(nums1))