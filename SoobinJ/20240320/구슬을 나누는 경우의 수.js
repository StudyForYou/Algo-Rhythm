function fac(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  return Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}
