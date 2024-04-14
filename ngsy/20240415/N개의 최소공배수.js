/** N개의 최소 공배수 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12953
 *
 */
function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    //순차적으로 최소공배수를 구함
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

//최대 공약수 구하기
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// 최소공배수 구하기
const lcm = (a, b) => (a * b) / gcd(a, b);
