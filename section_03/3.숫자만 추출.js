function toNumber(str) {
  let result;
  let numString = str.replace(/[a-zA-Z]/g, '');
  
  result = parseInt(numString);

  return result;
}

console.log(toNumber('g0en2T0s8eSoft'));