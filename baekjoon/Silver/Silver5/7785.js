const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let queue = [];
arr.forEach((el) => {
  let [name, attendance] = el.split(' ');
  // for(let i = 0; i < arr.length; i++) {
  //   let [temp_name, temp_attendance] = arr[i].split(' ');
  //   console.log("name: " + temp_name);
  //   if(attendance === "enter" && temp_name === name && temp_attendance !== "leave") {
  //     queue.push(name);
  //   }
  // }
  if(attendance === "enter") {
    queue.push(name);
  } else if(attendance === "leave") {
    queue.splice(queue.indexOf(name), 1);
  }
})

console.log(queue.join('\n'));