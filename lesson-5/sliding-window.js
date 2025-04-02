const arr = [1, 3, 5, 10, 23, 15, 76, 2, 5];

const window = 4;

function subArr(arr, window) {
  if (arr.length < window) {
    return null;
  }

  let maxSum = 0;

  for (let i = 0; i < window; i++) {
    maxSum += arr[i];
    maxSum;
  }

  let tempSum = maxSum;

  for (let j = window; j < arr.length; j++) {
    tempSum = tempSum - arr[j - window] + arr[j];
    tempSum;
    maxSum = Math.max(maxSum, tempSum);
    maxSum;
  }

  return maxSum;
}

console.log(subArr(arr, window));
