/**숫자의 표현 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 *
 * 이중 for문 방법밖에 생각이 나지 않았다. 그러나 기본적인 중첩 for문으로는 효율성 테스트에서 간헐적 시간초과가 발생함.
 * for : 배열의 길이만큼 순회
 * forEach : 배열자체를 순회
 * 정확한 이유는 모르겠지만 forEach는 계속 성공하였다.
 */
function solution(n) {
  const numArr = new Array(n).fill().map((_, idx) => idx + 1);
  let sum = 0;
  let count = 0;

  //효율성 테스트 1~4 간헐적으로 시간초과 실패 (성공시 : 최대 2.86ms)
  // for(let i =1; i <= n;i++){
  //     sum =0;
  //   for(let j = i; j <= n; j++){
  //       sum+=j;
  //     if(sum === n) ++count;
  //     if(sum > n) break;
  //   }
  // }

  //효율성 테스트 최대 2.37ms
  numArr.forEach((val) => {
    sum = 0;
    for (let j = val; j <= n; j++) {
      sum += j;
      if (sum === n) ++count;
      if (sum > n) break;
    }
  });

  return count;
}
