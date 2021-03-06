// 각 자연 수를 뒤집어서 그 뒤집은 수가 소수이면 소수를 출력

function calc(arr) {
  let numArr = []; // 최종 결과
  let result = '';
  
  for (let i = 0; i < arr.length; i++) {
    let numString = parseInt(String(arr[i]).split('').reverse().join(''));

    numArr.push(numString);
  }

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 1) {
      continue;
    }

    if (numArr[i] === 2 || numArr[i] === 3) {
      result = `${result} ${numArr[i]}`;
      continue;
    }

    if (numArr[i] % 2 === 0) {
      continue;
    } else {

      let cnt = 0;

      for (let j = 3; j <= numArr[i]; j+=2) {
        
        if (numArr[i] % j === 0 && j !== numArr[i]) {
          cnt++;
        } else if (j === numArr[i] && cnt === 0) {
          result = `${result} ${numArr[i]}`;
        }

      }
    }
  }

  return result;
}

console.log(calc([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 소수 구하는 식
// function isPrime(n) {
// 	if (n === 1) return false;
// 	for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
// 		if (n % i === 0) return false;
// 	}
// 	return true;
// }