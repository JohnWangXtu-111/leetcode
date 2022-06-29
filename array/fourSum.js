const fourSum = (nums, target) => {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let first = 0; first <= nums.length - 4; ++first) {
    if (first !== 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    for (let second = first + 1; second <= nums.length - 3; ++second) {
      if (second !== first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      let fourth = nums.length - 1;
      for (let third = second + 1; third <= nums.length - 2; ++third) {
        if (third !== second + 1 && nums[third] === nums[third - 1]) {
          continue;
        }
        while (
          fourth > third &&
          nums[first] + nums[second] + nums[third] + nums[fourth] > target
        ) {
          fourth--;
        }
        if (fourth === third) {
          break;
        }
        if (
          nums[first] + nums[second] + nums[third] + nums[fourth] ===
          target
        ) {
          ans.push([nums[first], nums[second], nums[third], nums[fourth]]);
        }
      }
    }
  }
  return ans;
};
