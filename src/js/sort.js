let arr = [1, 5, 3, 4, 7, 8, 2, 1, 2, 0, 0, 4, 6, 1]

// function mergeSort(arr) {
//   let len = arr.length
//   if (len <= 1) return arr
//   let middle = Math.floor(len / 2)
//   let left = arr.slice(0, middle)
//   let right = arr.slice(middle)
//   return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right) {
//   let result = []
//   while (left.length && right.length) {
//     if (left[0] >= right[0]) {
//       result.push(right.shift())
//     } else {
//       result.push(left.shift())
//     }
//   }
//   while (left.length) {
//     result.push(left.shift())
//   }
//   while (right.length) {
//     result.push(right.shift())
//   }
//   return result
// }
// console.log(mergeSort(arr))
function merge(leftArr, rightArr) {
  let res = []
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      res.push(leftArr.shift())
    } else {
      res.push(rightArr.shift())
    }
  }
  return res.concat(leftArr, rightArr)
}
function mergeSort(arr) {
  if (arr.length < 2) return arr
  let mid = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid, arr.length)
  // return merge(mergeSort(leftArr), mergeSort(rightArr)) //每个数字分为一组后再顺序合并merge
  return [...mergeSort(leftArr), mergeSort(rightArr)]
}
console.dir(mergeSort(arr), { depth: null })
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]) //arr[i]为基准数
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log(quickSort(arr))

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  nums.splice(i + 1, nums.length - i - 1)
  return nums.length
}
console.log(removeDuplicates(nums))
