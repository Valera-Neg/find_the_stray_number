function stray(nums) {
  let sorted = nums.sort()
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i-1] !== sorted[i] && sorted[i+1] !== sorted[i]) {
      return sorted[i];
    }
  }
}


console.log(stray([1, 1, 2])) //> 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) //> 3
console.log(stray([3, 17, 17, 17, 17, 17, 17])) //> 3
console.log(stray([17, 3, 17, 17, 17, 17, 17])) //> 3