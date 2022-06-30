// function helpProcess(candidates, target, total, ans, use, index) {
//   if (total === target) {
//     return ans.push(use);
//   }
//   if (index === candidates.length || target < total) {
//     return;
//   }
//   for (let pos = index; pos < candidates.lenght; ++pos) {
//     if (pos !== index&& candidates[pos] === candidates[pos - 1]) {
//       continue;
//     }
//     helpProcess(candidates, target, total, ans, use, pos + 1);
//     helpProcess(
//       candidates,
//       target,
//       total + candidates[pos],
//       ans,
//       [...use, candidates[pos]],
//       pos + 1
//     );
//   }
// }

// var combinationSum2 = function (candidates, target) {
//   const ans = [];
//   candidates.sort((a, b) => a - b);
//   helpProcess(candidates, target, 0, ans, [], 0);
//   return ans;
// };

var helpProcess = function (total, target, candidates, ans, index, use) {
  if (total === target) {
    ans.push(use);
    return;
  }
  if (index === candidates.length || total > target) {
    return;
  }
  for (let i = index; i < candidates.length; ++i) {
    if (i !== index && candidates[i] === candidates[i - 1]) continue;
    helpProcess(total + candidates[i], target, candidates, ans, i + 1, [
      ...use,
      candidates[i],
    ]);
  }
};

var combinationSum2 = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);
  helpProcess(0, target, candidates, ans, 0, []);
  return ans;
};
