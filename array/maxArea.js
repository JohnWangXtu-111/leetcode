//装水最多的容器
var maxArea = (height) => {
  let left = 0,
    right = height.length - 1,
    ans = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    ans = Math.max(ans, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
