function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;

  let count = 0;

  for (let x =0; x <nums.legnth; x++){
  if (nums[x] >= start && nums[x] <= end){
    count++;
  }
}
return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;