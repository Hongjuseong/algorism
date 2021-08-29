function solution(s, e) {
  let answer = 0;

  const temp = Array.from({length: 10001}, () => 0);
  const queue = [];

  queue.push(s);

  while(queue.length) {
    const x = queue.shift();

    for(let nx of [x - 1, x + 1, x + 5]) {

      if(nx === e) return temp[x] + 1;
      if(nx > 0 && nx <= 10000) {
        queue.push(nx);
        temp[nx] = temp[x] + 1;
        // console.log(`nx = ${nx} ${temp[nx]}`);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));



/*
 5                     0
4 6    10              1
      9  11    15      2
             14        3
*/
