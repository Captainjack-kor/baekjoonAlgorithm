function solution(word) {
  var answer = 0;
  // let vowels = ["A", "E", "I", "O", "U"];
  // let vowels = {
  //   "A" : 0,
  //   "E" : 1,
  //   "I" : 2,
  //   "O" : 3,
  //   "U" : 4,
  // }
  let vowels = {
    0: "A",
    1: "E",
    2: "I",
    3: "O",
    4: "U",
  }

  console.log(vowels);
  
  //오오,,,이것은 스택의 구조다.
  //앞에서부터 채워넣고 뒤에 비교하면 될 듯
  
  let stack = [];

  let count = 0;
  
  let start = 0;
  let stop = 10;
  while(start !== stop) {

    // for(let i = 0; i < vowels.length; i++) {
      let target = 0;
      if(stack.length !== 5) {
        console.log(stack[stack.length - 1]);
        // console.log("TEST: " + vowels[stack[stack.length - 1]]);
        if(stack[stack.length - 1]) {
          
        }
        // if(stack[stack.length - 1] !== vowels[stack[stack.length - 1]]) {
          // Object.keys(vowels).length;

          //* 스택에 쌓기전에 비교해야 함;
          stack.push(Object.values(vowels)[target]);
          console.log(Object.values(vowels)[target]);
          target++;
        // }
      }
      // console.log(stack[stack.length - 1]);
      // console.log(vowels[stack[stack.length - 1]]);
      // if()
    // }
    count++;
    start++;
  }

  console.log(stack);
  
  return answer;
}

solution();