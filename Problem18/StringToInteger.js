
var myAtoi = function(s) {
    s = s.trim();
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  const isNeg = s[0] === '-';
  let res = 0;
  for (let i = isNeg || s[0] === '+' ? 1 : 0; i < s.length; i++) {
    if (s[i] === ' ' || Number.isNaN(s[i] - '0')) break;
    res = res * 10 + (s[i] - '0');
  }
  if (isNeg) return -res < min ? min : -res;
  return res > max ? max : res;
};
console.log(myAtoi("-+12"));

console.log(Number('-90E3'));