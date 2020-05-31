function sumOfAllOddNumbers(nums) {
  // Insert code here;
let count = 0;

for (let x = 0; x < nums.length; x++){
  if (nums[x] % 2 !=0) {
    count++;
  }
}
return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;