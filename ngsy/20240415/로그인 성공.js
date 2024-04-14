/** 로그인 성공 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120883
 *
 */
function solution(id_pw, db) {
  const dbId = db.map((el) => el[0]);

  const [id, pw] = id_pw;

  if (!dbId.includes(id)) return "fail";

  const index = dbId.indexOf(id);
  const answer = db[index][1] === pw ? "login" : "wrong pw";
  return answer;
}
