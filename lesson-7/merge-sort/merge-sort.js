const arr = [3, 2, 4, 1];

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  const mid = Math.floor(arr.length / 2); // split arr in two
  const leftArr = arr.slice(0, mid); // from 0 to mid
  const rightArr = arr.slice(mid); // from mid to end
  return merge(mergeSort(leftArr), mergeSort(rightArr)); // recursion
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr));
