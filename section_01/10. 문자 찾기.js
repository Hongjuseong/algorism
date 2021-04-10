// 한 개의 문자열을 입력받고 특정 문자열에 몇개 존재하는지 찾기
// 20210410
// 1차 문제 풀이

function strCal(arr, str) {
  let result = 0;
  let pos;

  pos = arr.indexOf(str);

  while (pos !== -1) {
    result++;
    pos = arr.indexOf(str, pos + 1);
  }

  return result;
}

console.log(strCal('COMPUTERPROGRAMMING', 'R')); 