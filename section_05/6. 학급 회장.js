function solution(arr) {
  const vote = {};

  for (let i = 0; i < arr.length; i++) {

    if (!vote[arr[i]]) {
      vote[arr[i]] = 1;
    } else {
      vote[arr[i]]++;
    }
  }

  const keys = Object.keys(vote);
  let max = 0;
  let leader = '';
  
  for (let i = 0; i < keys.length; i++) {

    if (vote[keys[i]] > max) {
      max = vote[keys[i]];
      leader = keys[i];
    }
    
  }

  // console.log(max, leader);

  return leader;

}

console.log(solution('BACBACCACCBDEDE'));