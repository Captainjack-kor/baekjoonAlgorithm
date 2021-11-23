const getCombination = function (arr, selectNumber) {
    const results = [];
    if(selectNumber === 1) {
      return arr.map((el) => [el]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombination(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
}

// console.log(getCombination([1, 2, 3, 4], 2));
console.log(getCombination([1, 2, 3, 4], 3));