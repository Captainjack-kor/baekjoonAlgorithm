function isPythagorean(side1, side2, side3) {
  const pow1 = side1 * side1;
  const pow2 = side2 ** 2;
  const pow3 = Math.pow(side3, 2);

  if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
    return true;
  }

  return false;
}

// onsole.log(output); // --> true (5 * 5 = 3 * 3 + 4 * 4)

// isPythagorean(5, 3, 4);
// console.log(output); // --> true

output = isPythagorean(6, 4, 5);
console.log(output); // --> false