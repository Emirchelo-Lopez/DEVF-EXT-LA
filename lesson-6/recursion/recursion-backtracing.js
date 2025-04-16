// function count(number) {
//   if (number > 5) {
//     return;
//   }

//   console.log(number);

//   count(number + 1);
// }

// count(1);

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  console.log(number * factorial(number - 1));
  return number * factorial(number - 1);
}

console.log(factorial(3));

// Con return 1;
// 3 * factorial(3-1=2) = 2 * factorial(2-1=1) = 1
// 3 * 2 * 1
// 3 * 2
// 6

// Sin return 1;
// 3 * factorial(3-1= 2) = 2 * factorial(2-1= 1) = undefined
// 3 * 2 * undefined
// 3 * NaN
// NaN
