function isOdd(num) {
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return true;
  }

  if (num < 0) {
    return isOdd(-num);
  }
  return isOdd(num - 2);
}