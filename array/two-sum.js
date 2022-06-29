var twoSum = (nums, target) => {
  const record = new Map();
  for (let idx = 0; idx < nums.length; ++idx) {
    //idx可能等于0 => 进入不了这个分支
    if (record.get(target - nums[idx]) !== undefined) {
      return [idx, record.get(target - nums[idx])];
    }
    record.set(nums[idx], idx);
  }
};

var twoSum = (nums, target) => {
  for (let j = 0; j < nums.length - 1; ++j) {
    for (let i = j + 1; i < nums.length; ++i) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
