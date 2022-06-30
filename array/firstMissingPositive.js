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
