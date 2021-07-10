let answer = '';

function solution(num) {

  if (num > 7) return;
  else {
    // answer += `${num}`; // 전위
    solution(num * 2);
    // answer += `${num}`; // 중위
    solution(num * 2 + 1);
    answer += `${num}`; // 후위
  }

  return answer;
}

console.log(solution(1));

// 전위: 부모 왼쪽 오른족
// 중위: 왼쪽 부모 오른쪽
// 후위: 왼쪽 오른쪽 부모
// 콜스택 이해에 좋음