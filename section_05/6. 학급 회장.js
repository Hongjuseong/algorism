function solution(str) {
  const vote = {};

  for (let i = 0; i < str.length; i++) {

    if (vote[str[i]]) {
      vote[str[i]]++;
    } else {
      vote[str[i]] = 1;
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