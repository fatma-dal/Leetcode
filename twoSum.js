/*
 */

// using for loop

// var twoSum = function(nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
            
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

// using while 
var twoSum = function(nums, target) {
    let i=0
    let  j=i+1
    while (i<arr.length-1){
        target=arr[i]+arr[j]
        i++
        j++
        return [i,j]
    }
    
    return []
}




var arr = [0, 2, 6,1,7]
var y = 6
console.log(twoSum(arr, y))
// whik





