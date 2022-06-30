// var firstMissingPositive = function (nums) {
//   let help = nums.filter((v) => v > 0);
//   let a = 1;
//   help = [...new Set(help)];
//   help.sort((a, b) => a - b);

//   for (let i = 0; i < help.length; ++i) {
//     if (help[i] !== a) {
//       return a;
//     }
//     ++a;
//   }
//   return a;
// };

var firstMissingPositive = (nums) => {
  //置换
  for (let i = 0; i < nums.length; ++i) {
    /**
     * nums[i] > 0 && nums[i] < nums.length ===> 不能置换
     * nums[nums[i] - 1] === nums[i]当前已经置换完毕了
     * 重复元素会被跳过
     */
    while (
      nums[i] > 0 &&
      nums[i] < nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      let t = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[nums[i] - 1] = t;
    }
  }
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
