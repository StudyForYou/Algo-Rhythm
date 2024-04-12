/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120883
 * @param {string[]} id_pw 
 * @param {string[][]} db 
 * @returns 입력한 id_pw가 db에 있는지 확인하고, 로그인 성공 여부를 fail, wrong pw, login 으로 리턴해라
 */
function solution(id_pw, db) {
  let id = db.filter((data) => {
    return data[0] === id_pw[0];
  });

  let result = "";
  if (id.length === 0) {
    result = "fail";
  } else {
    id.forEach((pw) => {
      result = pw[1] === id_pw[1] ? "login" : "wrong pw";
    });
  }
  return result;
}
