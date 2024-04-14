// 몸풀기
function solution(id_pw, db) {
  for(let user of db){
    if (user[0] === id_pw[0] && user[1] === id_pw[1]) return "login";
    if(user[0] === id_pw[0] && user[1] !== id_pw[1]) return "wrong pw";
  }
  return "fail";
}