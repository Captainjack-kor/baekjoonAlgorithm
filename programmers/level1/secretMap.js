function solution(n, arr1, arr2) {
  var answer = [];
  // OR연산으로 비교하는게 관건일 듯
  let tempArr1 = [];
  let tempArr2 = [];
  let temp = "";
  console.log(arr1[0].toString(2));
  for(let i = 0; i < n; i++) {
    console.log(arr1[i].toString(2));

    if(arr1[i].toString(2).length !== n) {
      temp = arr1[i].toString(2);
      while(temp.length < n) {
        temp = "0" + temp;
      }
      tempArr1.push(temp);
      temp = "";
    } else {
      tempArr1.push(arr1[i].toString(2));
    }

    if(arr2[i].toString(2).length !== n) {
      // tempArr2.push('0' + arr2[i].toString(2));
      temp = arr2[i].toString(2);
      while(temp.length < n) {
        temp = "0" + temp;
      }
      tempArr2.push(temp);
      temp = "";
    } else {
      // tempArr2.push('0' + arr1[i].toString(2));
      tempArr2.push(arr2[i].toString(2));
    }
  }

  console.log(tempArr1);
  console.log(tempArr2);

  let strSet = "";
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      strSet += (Number(tempArr1[i][j]) || Number(tempArr2[i][j]) ? "#" : " ");
      // console.log(tempArr1[i][j]);
    }
    answer.push(strSet);
    strSet = "";
  }
  console.log(answer);
  return answer;
}


solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]); 
// ["#####","# # #", "### #", "# ##", "#####"]

// solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]); 
// ["######", "### #", "## ##", " #### ", " #####", "### # "]
