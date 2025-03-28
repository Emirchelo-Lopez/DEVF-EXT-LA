let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findPairs(arr, target) {
  // define pointers
  let left = 0;
  let right = arr.length - 1;

  while (left + right === target) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      console.log(`Target found: ${arr[left]} + ${arr[right]} = ${target}`);
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  console.log("Target not found");

  return false;
}

// findPairs(numbers, 100);

function isPalindrome(phrase) {
  let phraseNoSpace = phrase.toLowerCase().split(" ").join("");

  let left = 0;
  let right = phraseNoSpace.length - 1;

  while (left < right) {
    if (phraseNoSpace[left] !== phraseNoSpace[right]) {
      console.log(`"${phraseNoSpace}" is not palindrome`);
      return false;
    }
    left++;
    right--;
  }
  console.log(`"${phraseNoSpace}" is palindrome`);
  return true;
}

isPalindrome("Anita lava la tina");
