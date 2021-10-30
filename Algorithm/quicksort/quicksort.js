let quickSort = (array) => {
  if(array.length < 2) {
    // only have 1
    return array;
  }

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else if(array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]); // 같을 때
    }
  }

  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

const sorted = quickSort([2,1,5,4,3,9,8,6,7]);

console.log(sorted);