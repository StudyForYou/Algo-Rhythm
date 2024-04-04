/**무작위로 K개의 수 뽑기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/181858
 *
 * filter메소드로 풀게되면 테스트코드는 성공하지만 채점에서 전부 실패 떴음, 
      이유 : 반례 케이스 ([0, 1, 0, 1] ,4)   무작위로 수가 arr배열에 들어가있기때문에 같은 수가 연속으로 나온다는 보장이 없다.
 *  const answer = arr.filter((el,idx) => el !== arr[idx+1]).slice(0,k); 
 * 
 */
function solution(arr, k) {
  const answer = arr
    .reduce((acc, cur) => {
      if (acc.indexOf(cur) === -1) acc.push(cur); //중복 요소 확인 후 없을 경우에만 push
      return acc;
    }, [])
    .slice(0, k); //k 사이즈 만큼 slice

  const blankCount = answer.length - k; //현재 배열의 길이와 k 차이
  if (blankCount < 0) for (let i = blankCount; i < 0; i++) answer.push(-1); // 음수가 나오면 그만큼 부족하다는 뜻이기에 -1을 채워줌

  return answer;
}
