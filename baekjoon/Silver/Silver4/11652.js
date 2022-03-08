const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let i = 0; 
    let j = 0;
    const sorted = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }

    if (i < left.length) sorted.push(...left.slice(i));
    if (j < right.length) sorted.push(...right.slice(j));

    return sorted;
}

const sorted_arr = mergeSort(arr.map(v => BigInt(v)));
let maxCount = 0;
let curCount = 0;
let prevNumber = "";
let largest = 2**62;
sorted_arr.forEach(v => {
    if (prevNumber !== v) {
        prevNumber = v;
        curCount = 0;
    }
    curCount++;
    if ((curCount > maxCount) || (curCount === maxCount && largest > v)) {
        maxCount = curCount;
        largest = v;
    }
});

console.log(String(largest));


// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();

// input = input.map(v => BigInt(v));

// let count = 0;
// let max = 0;
// let answer = 0;
// for(let i = 0; i < input.length; i++) {
//   for(let j = i + 1; j < input.length; j++) {
//     if(input[i] === input[j]) {
//       count++;
//     }
//   }

//   if(count > max) {
//     answer = input[i];
//     max = count;
//   }
//   count = 0;
// }

// console.log(answer);