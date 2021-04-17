// 입력된 문자열에서 대문자로 통일하여 문자열 출력

function convertUpper(str) {
  return str.toUpperCase();
}

console.log(convertUpper('ItisTimeToStudy'));

// function solution(str) {
// 	let answer = '';
// 	for (let i of str) {
// 		let asciiNum = i.charCodeAt();
// 		if (asciiNum >= 97 && asciiNum <= 122) {
// 			answer += String.fromCharCode(asciiNum - 32);
// 		} else {
// 			answer += i;
// 		}
// 	}
// 	return answer;
// }