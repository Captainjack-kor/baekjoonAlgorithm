function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let count = 0;
  // let crossing_truck_list = Array(bridge_length).fill(0);
  let crossing_truck_list = [];
  // console.log(crossing_truck_list);
  let after_crossing_truck_list = [];
  let end_point = truck_weights.length;
  console.log(end_point);
  while(end_point !== after_crossing_truck_list.length) { 
    
    let weight_sum = crossing_truck_list.reduce((acc,cur) => acc + cur, 0);
    
    if(weight_sum + truck_weights[0] <= weight && truck_weights[0] !== undefined) {
      // crossing_truck_list.shift();
      crossing_truck_list.push(truck_weights.shift());
      // count += bridge_length;
    } 
    
    else {
      count += bridge_length;
      count += crossing_truck_list.length;

      while(crossing_truck_list.length > 0) {
        after_crossing_truck_list.push(crossing_truck_list.shift());
      }
      
      if(truck_weights.length > 0) {
        crossing_truck_list.push(truck_weights.shift());
      }
      
      
      console.log("count: " + count);
    }
    console.log(crossing_truck_list);
  }

  console.log(count);
  return answer;
}

solution(2, 10, [7,4,5,6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10,10,10,10,10,10,10,10,10,10]); // 110


