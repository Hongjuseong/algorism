function solution(n, k) {
  const prince = new Array(n).fill(0).map((v, i) => i + 1);
  let cnt = 1;
  
  while(prince.length > 1) {
    
    if (cnt === k) {
      prince.shift();
      cnt = 1;
    } else {
      prince.push(prince.shift());
      cnt++;
    }
    
  }

  return prince.join('');
}

console.log(solution(8, 3));