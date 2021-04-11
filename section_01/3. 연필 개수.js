// 학생 입력 학생 당 연필 1 자루
// 연필 1 다스는 12 자루

function distribute(student) {
  let dozen = 0;
  const pencil = 12;

  // dozen = Math.floor(student / pencil) + 1;
  dozen = Math.ceil(student / pencil);

  return dozen;
}

console.log(distribute(25));

// Math.ceil() : 올림
// Math.round() : 반올림
// Math.floor() : 내림