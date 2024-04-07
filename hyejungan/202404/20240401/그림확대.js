/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * @param {string[]} picture
 * @param {number} k
 * @returns 문자열 배열이 들어간 직사각형 형태의 그림파일을 가로 세로 k배 확장해서 출력
 */

function solution(picture, k) {
  return picture.reduce((acc, cur) => {
    let str = "";
    cur.split("").forEach((p) => {
      //picture의 각 한줄의 한 요소를
      str += p.repeat(k); //k번 반복해서 str에 추가
    });

    for (let i = 0; i < k; i++) {
      //str을 새로운 배열에 k번씩 추가
      acc.push(str);
    }

    return acc;
  }, []);
}

/**
 * ["..xxxx......xxxx..",
 * "..xxxx......xxxx..",
 * "xx....xx..xx....xx",
 * "xx....xx..xx....xx",
 * "xx......xx......xx",
 * "xx......xx......xx",
 * "..xx..........xx..",
 * "..xx..........xx..",
 * "....xx......xx....",
 * "....xx......xx....",
 * "......xx..xx......",
 * "......xx..xx......",
 * "........xx........",
 * "........xx........"]
 */
