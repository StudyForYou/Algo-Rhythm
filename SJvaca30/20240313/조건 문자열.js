/**
https://school.programmers.co.kr/learn/courses/30/lessons/181934
*/

function solution(ineq, eq, n, m) {
  // n < m
  if (ineq === "<") {
    // n <= m
    if (eq === "=") {
      return n <= m ? 1 : 0;
      // n <! m
    } else if (eq === "!") {
      return n < m ? 1 : 0;
    }

    // n > m
  } else if (ineq === ">") {
    // n >= m
    if (eq === "=") {
      return n >= m ? 1 : 0;
      // n >! m
    } else if (eq === "!") {
      return n > m ? 1 : 0;
    }
  }
}
