function solution(rs, as) {
  const asArr = [...as];
  const rsArr = [...rs];

  for (let i = 0; i < asArr.length; i++) {
    const subject = asArr[i];
      
    if (rsArr.includes(subject)) {
      if (subject !== rsArr.shift()) { 
				return 'NO';
			}
    }

  }

  if (rsArr.length > 0) {
		return 'NO';
	}

	return 'YES';
}

console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CABDGE'));