//65~90, 97~122 
// 무난~ 하긴하지만 아스키코드 97이었는지 96이었는지랑 변환메소드가 헷갈려서 애 좀 먹었음.
// 메소드 알고만 있다면 별 문제 없는 난이도.

function solution(s, n) {
  const arr = s.split("").map(ch =>{
    let ascii_prev = ch.charCodeAt();

    if (ascii_prev >= 65 && ascii_prev <= 90){
      let ascii_next = ascii_prev+n <= 90 ? ascii_prev + n : ascii_prev + n - 90 + 65 -1;
      return String.fromCharCode(ascii_next);
    }
    else if (ascii_prev >= 97 && ascii_prev <= 122){
      let ascii_next = ascii_prev+n <= 122 ? ascii_prev + n : ascii_prev + n - 122 + 97 -1;
      return String.fromCharCode(ascii_next);
    }
    else return ch;
  })
  return arr.join("")
}