// 版本1 左闭右闭区间
function search1(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let midIdx = left;
    while (left <= right) {
        midIdx = Math.floor((left + right) / 2);
        const midValue = nums[midIdx];
        if (midValue > target) {
            right = midIdx - 1;
        } else if (midValue < target) {
            left = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return -1;
};

// 版本2 左闭右开区间
function search2(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    let midIdx = left;
    while (left < right) {
        midIdx = Math.floor((left + right) / 2);
        const midValue = nums[midIdx];
        if (midValue > target) {
            right = midIdx;
        } else if (midValue < target) {
            left = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return nums[midIdx] === target ? midIdx : -1;
};