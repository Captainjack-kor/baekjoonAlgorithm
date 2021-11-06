function isFalsy(anything) {
  // TODO: 여기에 코드를 작성합니다.
  return !Boolean(anything);
}

let output = isFalsy('hello');
console.log(output); // --> false

output = isFalsy(0);
console.log(output); // --> true

output = isFalsy(true);
console.log(output); // --> false

output = isFalsy(undefined);
console.log(output); // --> true

output = isFalsy(NaN);
console.log(output); // --> true

output = isFalsy('');
console.log(output); // --> true