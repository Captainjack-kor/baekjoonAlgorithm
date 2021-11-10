function solution(sizes) {
  let answer = 0;
  
  let maxX = 0;
  let maxY = 0;

  let result = 0;
  let result2 = 0;
    
  let check = 0;
  
  sizes.forEach((el) => {
      let originX = 0;
      let originY = 0;
      let count = 0;

      if(maxX < el[0] ) {
          originX = maxX;
          maxX = el[0];
          count++;
      } 
      
      if(maxY < el[1]) {
          originY = maxY;
          maxY = el[1];
          count++;
      }
      
      result = maxX * maxY;
      console.log("maxX, maxY: " + maxX, maxY);
      console.log("result1: " + result)

      if(count >= 1) {
          if(originX < el[1]) {
              originX = el[1];
          }
          
          if(originY < el[0]) {
              originY = el[0];
          }
          
          
          console.log("originX, originY: " + originX, originY);
          result2 = originX * originY;
          console.log(result2);
          
      }


    if(result > result2) {
      maxX = originX;
      maxY = originY;
    } 

  })

  if(result2 < result) {
    return result2;
  } else {
    return result;
  }
} 
  

  
  

// console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); //기댓값: 4000
// console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133

// console.log(solution([[60, 50], [30, 70]]));


