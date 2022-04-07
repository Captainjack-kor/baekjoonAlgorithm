function sumFunc(num) {
  if(num === 1) {
    return 1;
  }
  return num + sumFunc(num - 1);
}

console.log(sumFunc(5));
