var removeDuplicates = function(nums) {
  let bound = -1, index = 0;
  while(index <= nums.length - 1) {
    if(index !== 0 && nums[index] === numde[index - 1]) {
      index++;
      continue;
    }
    nums[++bound] = nums[index];
    index++;
  }
  return bound + 1;
};