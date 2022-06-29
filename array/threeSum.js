var threeSum = (nums) => {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let first = 0; first <= nums.length - 3; ++first) {
    //如果nums[first] === nums[first - 1]那么就可能出现重复的组合，因为这个val和后面的元素已经组合了一遍了
    //这么去重的原因还有一个就是这个数组已经排序过了
    if (first !== 0 && nums[first] === nums[first - 1]) continue;
    for (let second = first + 1; second <= nums.length - 2; ++second) {
      if (second !== first + 1 && nums[second] === nums[second - 1]) continue;
      for (let third = second + 1; third <= nums.length - 1; ++third) {
        if (third !== second + 1 && nums[third] === nums[third - 1]) continue;
        if (nums[first] + nums[second] + nums[third] === 0) {
          ans.push([first, second, third]);
        }
      }
    }
  }
  return ans;
};

var threeSum = (nums) => {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let first = 0; first <= nums.length - 3; ++first) {
    if (first !== 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = nums.length - 1;
    for (let second = first + 1; second <= nums.length - 2; ++second) {
      if (second !== first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      while (third > second && nums[third] + nums[second] + nums[first] > 0) {
        third--;
      }
      if (third === second) break; //third和second相等了，但是三者之和依然大于0，这种情况必然是无解的，可以直接跳出循环
      if (nums[third] + nums[second] + nums[first] === 0) {
        ans.push([nums[third], nums[second], nums[first]]);
      }
    }
  }
  return ans;
};
