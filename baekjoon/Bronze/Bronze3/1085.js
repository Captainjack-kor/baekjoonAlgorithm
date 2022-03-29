const [x, y, w, h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

// console.log(x, y, w ,h)

let minX = 0;
let minY = 0;

//get MinX
if(Math.abs(w - x) <= Math.abs(x - 0)) {
  minX = Math.abs(w - x);
} else {
  minX = Math.abs(x - 0);
}

//get MinY
if(Math.abs(h - y) <= Math.abs(y - 0)) {
  minY = Math.abs(h - y);
} else {
  minY = Math.abs(y - 0);
}

//  console.log(minX, minY);

if(minX < minY) {
  console.log(minX);
} else {
  console.log(minY);
}
