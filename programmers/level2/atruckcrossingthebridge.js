function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let crossing_truck_list = Array(bridge_length - 1).fill(0);
  // let crossing_truck_list = [];

  crossing_truck_list.push(truck_weights.shift());
  // console.log(crossing_truck_list);

  while(crossing_truck_list.length > 0) {

    // count += bridge_length;
    count++;
    // crossing_truck_list.pop();
    let weight_sum = crossing_truck_list.reduce((acc,cur) => acc + cur, 0);
    if(weight_sum === 0 && truck_weights.length === 0) {
      break;
    }
 
    if(weight_sum + truck_weights[0] <= weight && truck_weights[0] !== undefined) {
      crossing_truck_list.push(truck_weights.shift()); 
      crossing_truck_list.shift();
    } else {
      crossing_truck_list.shift();
      let weight_sum = crossing_truck_list.reduce((acc,cur) => acc + cur, 0);
      if(weight_sum + truck_weights[0] <= weight && truck_weights[0] !== undefined) {
        crossing_truck_list.push(truck_weights.shift());
      } else {
        crossing_truck_list.push(0);
      }
    }

    console.log(crossing_truck_list);
  }


  console.log(count);
  return count;
}

// solution(2, 10, [7,4,5,6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10,10,10,10,10,10,10,10,10,10]); // 110


