var threeSumClosest = (nums, target) => {
  let closest = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let first = 0; first <= nums.length - 3; ++first) {
    if (first !== 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = nums.length - 1,
      second = first + 1;
    while (second < third) {
      let sum = nums[third] + nums[second] + nums[first];
      if (sum === target) {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        second++;
      } else {
        third--;
      }
    }
  }

  return closest;
};
