// function helpProcess(target, total, use, index, ans, candidates) {
//   if(total === target) {
//     return ans.push(use);
//   }
//   if(index === candidates.length) {
//     return;
//   }
//   for(let cnt = 0; cnt * candidates[index] <= target - total; ++cnt) {
//     const u = [...use, ...new Array(cnt).fill(candidates[index])];
//     helpProcess(target, total + cnt * candidates[index], u, index + 1, ans, candidates);
//   }
// }
// var combinationSum = function (candidates, target) {
//   const ans = [];
//   helpProcess(target, 0, [], 0, ans, candidates);
//   return ans;
// };
const help = (total, target, index, candidates, use, ans) => {
  if (target === total) {
    ans.push(use);
    return;
  }
  if (index === candidates.length || target < total) {
    return;
  }
  for (let i = index; i < candidates.length; ++i) {
    help(
      total + candidates[i],
      target,
      i, //因为一个数可以被多次选取
      candidates,
      [...use, candidates[i]],
      ans
    );
  }
};
const combinationSum = (candidates, target) => {
  const ans = [];
  help(0, target, 0, candidates, [], ans);
  return ans;
};
