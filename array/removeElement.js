var removeElement = function(nums, val) {
  let bound = -1, index = 0;
  while(index <= nums.length - 1) {
    if(nums[index] === val) {
      index++;
      continue;
    }
    nums[++bound] = nums[index++];
  }
  return bound + 1;
};