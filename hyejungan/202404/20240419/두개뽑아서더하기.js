/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * @param {number[]} numbers 
 * @returns numbers의 배열에서 인덱스가 다른 두 수를 뽑아 더한다음 오름차순 정렬
 */
function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i !== j && !result.includes(numbers[i] + numbers[j]))
        result.push(numbers[i] + numbers[j]);
    }
  }
  return result.sort((a, b) => a - b);
}
