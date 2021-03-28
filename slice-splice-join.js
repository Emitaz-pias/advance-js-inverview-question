const nums = [1,2,3,4,5,6,7,8,9];

// slice will just remove the items entire arry will intact
const result = nums.slice(2,5)
 console.log(result,nums);
// splice will remove items from the whole array and it can add elements ito the array after removing the selected one
const added = nums.splice(1,2,99)
console.log(added,nums);
// joing joins elements like a string..we can put anything inside the method 
const joing = nums.join(" ")
console.log(joing);
