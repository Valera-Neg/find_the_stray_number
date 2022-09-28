function stray(nums) {
 return nums.reduce((a, b) => a ^ b);
}


console.log(stray([1, 1, 2])) //> 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) //> 3
console.log(stray([3, 17, 17, 17, 17, 17, 17])) //> 3
console.log(stray([17, 3, 17, 17, 17, 17, 17])) //> 3