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


// function solution(s) {
// 	let answer;
// 	let sh = new Map();
// 	for (let x of s) {
// 		if (sh.has(x)) sh.set(x, sh.get(x) + 1);
// 		else sh.set(x, 1);
// 	}
  
// 	let max = Number.MIN_SAFE_INTEGER;
// 	for (let [key, val] of sh) {
// 		if (val > max) {
// 			max = val;
// 			answer = key;
// 		}
// 	}
// 	return answer;
// }

// console.log(solution('BACBACCACCBDEDE'));


// ### 배열? 연결리스트?

// 가장 기본적인 자료구조인 **배열**의 경우 내부 인덱스를 이용하여 자료의 검색이 한 번에 이루어지기 때문에 빠른 검색 속도를 보이지만, 데이터 **삽입/삭제** 시 많은 데이터가 밀리거나 빈 자리를 채우기 위해 이동해야 하므로 많은 시간이 소요된다.

// 또, **연결리스트**는 삽입/삭제 시 인근 노드들의 참조 값만 수정해줌으로써 빠른 처리가 가능하지만, 처음 노드, 마지막 노드 이외의 위치에서 데이터를 삽입/삭제할 경우나 데이터를 검색할 경우에는 해당 노드를 찾기 위하여 처음부터 순회 검색을 해야하기 때문에 데이터의 수가 많아질수록 효율이 떨어질 수 밖에 없는 구조이다.

// 이를 극복하기 위해 제시된 방법이 해쉬(Hash)이다.

// ### 해쉬의 기본 개념

// 해쉬는 내부적으로 배열(Hash Table)을 사용하여 데이터를 저장하기 때문에 빠른 검색 속도를 갖는다. 그리고 데이터의 삽입/삭제 시 기존 데이터를 밀어내거나 채우는 작업이 필요없도록 특별한 알고리즘을 이용하여 데이터와 연관된 고유한 숫자를 만들어 낸 뒤 이를 **인덱스**로 사용한다.

// 즉, 삽입/삭제 시 데이터의 이동이 없도록 만들어진 구조이다.

// ### Map, Set

// 자바스크립트에서 해쉬 테이블은 **Object가 대표적**이지만, 다른 프로그래밍 언어에 존재하는 해쉬 테이블의 종류인 **Map, Set 또한 ES6 이후에 JS에 추가**되었다. 

// - Map : JS의 객체에서 key는 언제나 문자열만 가능하지만, Map은 key에 함수, 숫자, 배열 같은 타입이 들어오는 것이 가능하다. 또한 객체는 정렬되지 않으며, Map은 order가 있다.
// - Set : Set은 Map과 거의 유사하지만, 메모리 공간에 value는 저장하지 않고, key만 저장한다.